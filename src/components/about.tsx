import { motion } from "framer-motion";

export default function AboutMe() {
  return (
    <div className="flex justify-center items-center min-h-screen px-4 py-12 md:py-20">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="bg-white rounded-3xl max-w-4xl p-8 md:p-12 lg:p-16 shadow-2xl border border-gray-100"
      >
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-4xl md:text-5xl font-bold mb-8 text-gray-900 text-center"
        >
          About Me
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="space-y-6"
        >
          <p className="text-base md:text-lg leading-relaxed text-gray-700 text-center md:text-left">
            After graduating with a degree in Computer Applications, I decided to
            pursue my passion for programming. I started learning{" "}
            <span className="font-semibold text-blue-600 bg-blue-50 px-2 py-1 rounded">
              full-stack web development
            </span>
            . My favorite part of programming is the problem-solving aspect. I{" "}
            <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">
              love
            </span>{" "}
            the feeling of finally figuring out a solution to a problem.
          </p>

          <p className="text-base md:text-lg leading-relaxed text-gray-700 text-center md:text-left">
            My core stack is{" "}
            <span className="font-semibold text-blue-600 bg-blue-50 px-2 py-1 rounded">
              React, Node.js, and MongoDB
            </span>
            . I am also familiar with TypeScript and modern web technologies. I am always looking to
            learn new technologies and improve my skills. I am currently looking for a full-time
            position as a software developer.
          </p>

          <div className="pt-6 border-t border-gray-200">
            <p className="text-base md:text-lg text-gray-700 text-center md:text-left">
              When I'm not coding, I enjoy cooking food, watching movies, and
              playing cricket. I also enjoy learning new things and staying active.
            </p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
