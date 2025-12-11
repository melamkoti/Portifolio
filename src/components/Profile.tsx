import Image from "../assets/image1.jpg";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";
import { motion } from "framer-motion";

const Profile = () => {
  return (
    <div className="min-h-screen flex justify-center items-center px-4 py-20 md:py-0">
      <div className="flex flex-col items-center max-w-4xl w-full">
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, type: "spring", stiffness: 125 }}
          className="relative mb-8"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full blur-xl opacity-50 animate-pulse"></div>
          <img
            src={Image}
            className="relative w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-white shadow-2xl"
            alt="Koti Venkat M"
          />
        </motion.div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-center px-4 md:px-8 mb-8"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
            Hello, I'm Koti Venkat M
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl text-gray-700 leading-relaxed max-w-3xl mx-auto font-light">
            I'm a <span className="font-semibold text-blue-600">Full-stack developer</span> with{" "}
            <span className="font-semibold text-blue-600">2 years</span> of experience. I enjoy
            building sites & apps. My focus is{" "}
            <span className="font-semibold text-blue-600">React & Node.js (Express)</span>.
          </p>
        </motion.div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="flex flex-wrap justify-center items-center gap-4 md:gap-6"
        >
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(37, 99, 235, 0.3)" }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex justify-center items-center bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 rounded-full text-white px-6 md:px-8 py-3 md:py-4 shadow-lg transition-all duration-300 group"
          >
            <span className="text-base md:text-lg font-medium">Contact Me Here</span>
            <FaArrowRightLong className="ml-2 group-hover:translate-x-1 transition-transform" />
          </motion.a>

          <motion.a
            href="https://www.linkedin.com/in/melam-kotivenkateswarlu-b05a461a5"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1, y: -3 }}
            whileTap={{ scale: 0.95 }}
            className="flex justify-center items-center w-12 h-12 md:w-14 md:h-14 rounded-full bg-white border-2 border-gray-200 shadow-lg hover:shadow-xl hover:border-blue-500 transition-all duration-300"
          >
            <FaLinkedin className="text-xl md:text-2xl text-blue-600" />
          </motion.a>

          <motion.a
            href="https://github.com/melamkoti"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1, y: -3 }}
            whileTap={{ scale: 0.95 }}
            className="flex justify-center items-center w-12 h-12 md:w-14 md:h-14 rounded-full bg-white border-2 border-gray-200 shadow-lg hover:shadow-xl hover:border-gray-700 transition-all duration-300"
          >
            <IoLogoGithub className="text-xl md:text-2xl text-gray-800" />
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
};

export default Profile;
