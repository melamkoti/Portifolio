import { motion } from "framer-motion";

export default function AboutMe() {
  return (
    <div className="flex justify-center items-center min-h-screen  p-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="bg-white rounded-xl  max-w-3xl p-10 text-center"
      >
        <h1 className="text-4xl font-extrabold mb-8 text-gray-900">About Me</h1>
        <p className="text-lg leading-relaxed text-gray-700 mb-6">
          After graduating with a degree in Computer Applications, I decided to
          pursue my passion for programming. I started learning{" "}
          <span className="font-semibold text-indigo-600">
            full-stack web development.
          </span>{" "}
          My favorite part of programming is the problem-solving aspect. I{" "}
          <span className="font-semibold underline decoration-indigo-500 decoration-2 underline-offset-4">
            love
          </span>{" "}
          the feeling of finally figuring out a solution to a problem. My core
          stack is{" "}
          <span className="font-semibold text-indigo-600">
            React, Node.js, and MongoDB.
          </span>{" "}
          I am also familiar with TypeScript and React. I am always looking to
          learn new technologies. I am currently looking for a full-time
          position as a software developer.
        </p>

        <p className="text-lg text-gray-700">
          When I'm not coding, I enjoy cooking food, watching movies, and
          playing cricket. I also enjoy learning new things.
        </p>
      </motion.div>
    </div>
  );
}
