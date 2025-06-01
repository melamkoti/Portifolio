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

const skills = [
  { name: "HTML", icon: <FaHtml5 /> },
  { name: "CSS", icon: <FaCss3 /> },
  { name: "JavaScript", icon: <SiJavascript /> },

  { name: "Typescript", icon: <SiTypescript /> },

  { name: "React.js", icon: <FaReact /> },
  { name: "Redux", icon: <SiRedux /> },

  { name: "Tailwind css", icon: <SiTailwindcss /> },
  { name: "Git", icon: <FaGitAlt /> },

  { name: "Node.js", icon: <FaNodeJs /> },
  { name: "PostgreSQL", icon: <FaDatabase /> },
  { name: "MongoDb", icon: <SiMongodb /> },
  { name: "Express", icon: <SiExpress /> },
  { name: "Socket.io", icon: <SiSocketdotio /> },

  // Add additional skills with icons here
];

const Skills = () => {
  return (
    <div className="flex justify-center items-center h-screen ">
      <div className="p-6   rounded-lg max-w-4xl w-full">
        <h2 className="text-xl font-bold text-gray-700 mb-6 text-center">
          My Skills
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-4">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className=" group flex flex-col items-center justify-center space-y-2 p-4 bg-gray-100 rounded-md h-24 w-full transform transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg"
            >
              <div className="text-blue-500 text-2xl transform transition-transform duration-500 ease-in-out group-hover:rotate-180">
                {skill.icon}
              </div>
              <span className="text-gray-800 font-medium text-sm">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
