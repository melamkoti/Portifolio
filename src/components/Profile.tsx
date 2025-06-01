import Image from "../assets/image1.jpg";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";
import { motion } from "framer-motion";
const Profile = () => {
  return (
    <div>
      <div className="flex justify-center items-center h-screen ">
        <div className="flex flex-col  p-4 w-2/4">
          <div className="flex justify-center items-center">
            <img src={Image} className="w-28 rounded-full " />
          </div>
          <div className="mx-auto mt-4 w-3/4 flex justify-center items-center  leading-6 text-justify	decoration-4 tracking-wide		">
            <p className="text-center text-3xl ">
              <span className="font-bold">Hello, I'm Koti Venkat M.</span> I'm a
              <span className="font-bold"> Full-stack developer</span> with{" "}
              <span className="font-bold">2 years</span> of experience. I enjoy
              building sites & apps. My focus is React & Node js(Express).
            </p>
          </div>
          <div className="flex justify-center mt-8 gap-6 items-center">
            <motion.div
              whileHover={{ scale: 1.1 }} // Adjust scale value as needed
              className="inline-flex justify-center items-center bg-black rounded-3xl  text-white px-4 py-2"
            >
              <a
                href="#contact"
                className="flex justify-center items-center space-x-2"
              >
                <span className="text-1xl">Contact Me Here</span>
                <FaArrowRightLong />
              </a>
            </motion.div>
            <div className=" flex justify-center items-center w-10 h-10 rounded-full bg-white border shadow-sm">
              <a
                href="https://www.linkedin.com/in/melam-kotivenkateswarlu-b05a461a5"
                target="_blank"
              >
                <FaLinkedin />
              </a>
            </div>
            <div className=" flex justify-center items-center w-10 h-10 rounded-full bg-white border shadow-sm">
              <a href="https://github.com/melamkoti" target="_blank">
                <IoLogoGithub />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
