from functools import lru_cache
import time
import traceback
from dhanhq import marketfeed
from datetime import datetime, timedelta, timezone
import asyncio
import nest_asyncio
import socketio
from aiohttp import web
import json

import websockets
# from dhan_config import settings
from pymongo import MongoClient
import logging
import os

# Apply the nest_asyncio patch
nest_asyncio.apply()

# Read environment variables
client_id = "1102310943"
access_token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJpc3MiOiJkaGFuIiwicGFydG5lcklkIjoiIiwiZXhwIjoxNzM2NDg2MDIwLCJ0b2tlbkNvbnN1bWVyVHlwZSI6IlNFTEYiLCJ3ZWJob29rVXJsIjoiIiwiZGhhbkNsaWVudElkIjoiMTEwMjMxMDk0MyJ9.TaolqY2uVfR0eb2rISMAibmmcrcaoPaDLW2jhUw3Q-3GD3_B-Vc1mwES1Qaa8MxKnuVlnd_Hxw-1XlGATGdn-A"

# client_id = settings.DHAN_CLIENT_ID
# access_token = settings.DHAN_ACCESS_TOKEN

# prev_closing_prices_data = {}

version = "v2"  # Mention Version and set to latest version 'v2'


instruments = [(marketfeed.NSE, "1333", marketfeed.Ticker),  # Ticker - Ticker Data
               (marketfeed.NSE, "1333", marketfeed.Quote),  # Quote - Quote Data
               (marketfeed.NSE, "1333", marketfeed.Full),  # Full - Full Packet
               (marketfeed.NSE, "11915", marketfeed.Ticker)]

# Categorized instruments

categories = {
    "NIFTY": [
        (marketfeed.NSE, "35005", marketfeed.Ticker),
        (marketfeed.NSE, "35006", marketfeed.Ticker),
        (marketfeed.NSE, "35013", marketfeed.Ticker),
    ],
    "BANKNIFTY": [
        (marketfeed.NSE, "35025", marketfeed.Ticker),
        (marketfeed.NSE, "35012", marketfeed.Ticker),
        (marketfeed.NSE, "35117", marketfeed.Ticker),
    ],
    "FINNIFTY": [
        (marketfeed.NSE, "35426", marketfeed.Ticker),
        (marketfeed.NSE, "35239", marketfeed.Ticker),
        (marketfeed.NSE, "35525", marketfeed.Ticker),
    ],
    "MIDCPNIFTY": [
        (marketfeed.NSE, "35004", marketfeed.Ticker),
        (marketfeed.NSE, "35007", marketfeed.Ticker),
        (marketfeed.NSE, "43292", marketfeed.Ticker),
    ],
    "SENSEX": [
        (marketfeed.NSE, "1146913", marketfeed.Ticker),
        (marketfeed.NSE, "1164591", marketfeed.Ticker),
        (marketfeed.NSE, "821310", marketfeed.Ticker),
    ],
}

all_instruments = instruments + [instr for category in categories.values() for instr in category]


# MongoDB setup

mongo_client = MongoClient("mongodb+srv://Cluster33476:HY2ixRMdxv1xIrk7@bhargava.ahtsnf9.mongodb.net/?retryWrites=true&w=majority&appName=Bhargava")
db = mongo_client["bhargava"]
collection = db["nse-data"]

# mongo_client = MongoClient(settings.MONGO_URI)
# db = mongo_client[settings.MONGO_DATABASE]
# collection = db[settings.MONGO_COLLECTION]
instruments_collection = db["ticker_info"]

# Create a Socket.IO server
sio = socketio.AsyncServer(async_mode='aiohttp',
                           ping_interval=25,  # Default is 25 seconds
                           ping_timeout=60,   # Default is 60 seconds
                           cors_allowed_origins="http://localhost:3000",
                           )
app = web.Application()
sio.attach(app)

async def index(request):
    return web.FileResponse('/Users/bhargava_g/Downloads/trading/nse-scraper/public/index.html')

# Setup routes for static files
app.router.add_get('/', index)
app.router.add_static('/', path='public', name='public')
client_SSId=""

@lru_cache(maxsize=128)
def get_instruments_data():
    # return list(instruments_collection.find({'deleted_at': None, "SM_EXPIRY_DATE": {'$gte': datetime.now(timezone.utc)}}, {"_id": 0}))
    return list(instruments_collection.find({'deleted_at': None}, {"_id": 0}))


@lru_cache(maxsize=10)
def get_single_instrument_data(security_id):
    return instruments_collection.find_one({"SECURITY_ID": int(security_id), 'deleted_at': None}, {"_id": 0})


def get_instruments():
    # resp = [(marketfeed.NSE_FNO, str(instrmt["SECURITY_ID"]), marketfeed.Ticker)
    #         for instrmt in get_instruments_data()]
    resp = [(marketfeed.NSE_FNO if instrmt['EXCH_ID'] == 'NSE' else marketfeed.BSE_FNO, str(instrmt["SECURITY_ID"]), marketfeed.Full)
            for instrmt in get_instruments_data()]
    print(resp)
    return resp
    # return [(marketfeed.NSE_FNO, "35089", marketfeed.Ticker), (marketfeed.NSE_FNO, "35089", marketfeed.Full)]

def categorize_data(response):
    for category, instruments in categories.items():
        if (response.get('exchangeSegment'), response.get('securityId'), marketfeed.Ticker) in instruments:
            return category
    return "UNKNOWN"

def process_data(response):
    # global prev_closing_prices_data
    #instmnt = get_single_instrument_data(dhan_data.get('security_id'))
    # prev_close_price = float(prev_closing_prices_data.get(
    #     dhan_data.get('security_id'), {}).get('prev_close', 0))
    category = categorize_data(response)
    resp = f"""
            Category: {category}
            Low: {response.get("low", "N/A")}
            High: {response.get("high", "N/A")}
            Open: {response.get("open", "N/A")}
            Bid Quantity: {response.get("depth", [{}])[0].get("bid_quantity", 0)}
            Ask Quantity: {response.get("depth", [{}])[0].get("ask_quantity", 0)}
            Total Sell Quantity: {response.get("total_sell_quantity", 0)}
            Total Buy Quantity: {response.get("total_buy_quantity", 0)}
            OI: {response.get("OI", 0)}
            OI Day High: {response.get("oi_day_high", 0)}
            OI Day Low: {response.get("oi_day_low", 0)}
            LTP: {response.get("LTP", "N/A")}
            """
    return resp


def save_to_db(dhan_data):
    collection.insert_one(dhan_data)
    # logging.info("Data saved to MongoDB")
    del dhan_data['_id']
    return dhan_data





async def emit_filtered_data(data):
    await sio.emit('market_data', data, room=str("nse-data"))


@ sio.event
async def connect(sid, environ):

    logging.info(f"Client connected: {sid}")


@ sio.event
async def subscribe(sid, feeds):
    for feed in feeds:
        await sio.enter_room(sid, feed)
    logging.info(f"Client {sid} subscribed to feeds: {feeds}")


async def fetch_market_data():
    while True:
        try:
            inst = get_instruments()
            data = marketfeed.DhanFeed(client_id, access_token, all_instruments, version)
            await data.connect()
            while True:
                data.run_forever()
                response = data.get_data()

                # if response.get('type') == 'Previous Close':
                #     prev_closing_prices_data[response.get('security_id')] = {
                #         'prev_close': response.get('prev_close'),
                #         'prev_OI': response.get('prev_OI')}

                if response.get('type') == 'Full Data':
                    print(response)
                    save_to_db(response)
                    await emit_filtered_data(process_data(response))
                await asyncio.sleep(0)
                # Periodic task every second
        except (ConnectionResetError, websockets.exceptions.ConnectionClosedError):
            logging.error(f"Error fetching market data: {e}")
            traceback.print_exc()
            try:
                await data.disconnect()
            except Exception:
                traceback.print_exc()
                pass
            await asyncio.sleep(5)

        except asyncio.CancelledError:
            logging.info("Task was cancelled, shutting down gracefully.")
            await data.disconnect()
            break

        except Exception as e:
            logging.error(f"Error fetching market data: {e}")
            traceback.print_exc()
            await asyncio.sleep(5)  # Wait before retrying
            await data.disconnect()


async def start_background_tasks(app):
    app['fetch_market_data'] = asyncio.create_task(fetch_market_data())


async def cleanup_background_tasks(app):
    app['fetch_market_data'].cancel()
    await app['fetch_market_data']


app.on_startup.append(start_background_tasks)
app.on_cleanup.append(cleanup_background_tasks)

if __name__ == "__main__":
    logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(name)s - %(levelname)s - %(message)s', handlers=[
        logging.FileHandler("market_data.log"),
        logging.StreamHandler()
    ])
    # web.run_app(app, host='0.0.0.0', port=5000)
    try:
        loop = asyncio.get_event_loop()

        # Create the web server and start it in the background
        runner = web.AppRunner(app)
        loop.run_until_complete(runner.setup())
        site = web.TCPSite(runner, 'localhost', 5000)
        loop.run_until_complete(site.start())

        # Run the event loop
        loop.run_forever()
    except RuntimeError as e:
        logging.error(f"Runtime error: {e}")
    except Exception as e:
        logging.error(f"Unhandled error: {e}")
        traceback.print_exc()
    finally:
        loop.run_until_complete(runner.cleanup())
        mongo_client.close()
