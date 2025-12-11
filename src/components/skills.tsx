import {
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaHtml5,
  FaCss3,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiMongodb,
  SiExpress,
  SiTailwindcss,
  SiSocketdotio,
  SiRedux,
  SiTypescript,
  SiJavascript,
} from "react-icons/si";
import { motion } from "framer-motion";

const skills = [
  { name: "HTML", icon: <FaHtml5 />, color: "text-orange-600" },
  { name: "CSS", icon: <FaCss3 />, color: "text-blue-600" },
  { name: "JavaScript", icon: <SiJavascript />, color: "text-yellow-500" },
  { name: "TypeScript", icon: <SiTypescript />, color: "text-blue-600" },
  { name: "React.js", icon: <FaReact />, color: "text-cyan-500" },
  { name: "Redux", icon: <SiRedux />, color: "text-purple-600" },
  { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "text-cyan-500" },
  { name: "Git", icon: <FaGitAlt />, color: "text-orange-600" },
  { name: "Node.js", icon: <FaNodeJs />, color: "text-green-600" },
  { name: "PostgreSQL", icon: <FaDatabase />, color: "text-blue-700" },
  { name: "MongoDB", icon: <SiMongodb />, color: "text-green-600" },
  { name: "Express", icon: <SiExpress />, color: "text-gray-700" },
  { name: "Socket.io", icon: <SiSocketdotio />, color: "text-gray-800" },
];

const Skills = () => {
  return (
    <div className="flex justify-center items-center min-h-screen px-4 py-12 md:py-20">
      <div className="max-w-6xl w-full">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-bold text-gray-900 mb-12 text-center"
        >
          My Skills
        </motion.h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.3 }}
              whileHover={{
                scale: 1.08,
                y: -8,
                transition: { duration: 0.2 }
              }}
              className="group flex flex-col items-center justify-center space-y-3 p-6 bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100"
            >
              <div className={`${skill.color} text-4xl md:text-5xl transform transition-all duration-300 group-hover:scale-110`}>
                {skill.icon}
              </div>
              <span className="text-gray-800 font-medium text-sm md:text-base text-center">
                {skill.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
