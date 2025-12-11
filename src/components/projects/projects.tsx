import Project1 from "../../assets/Screenshot 2024-11-04 151403.png";
import Project2 from "../../assets/Screenshot 2024-11-04 151449.png";
import Project3 from "../../assets/Screenshot 2024-11-04 151514.png";
import Project4 from "../../assets/Screenshot 2024-11-04 152421.png";
import { motion } from "framer-motion";
import { FiExternalLink } from "react-icons/fi";

const Projects = () => {
  const projectData = [
    {
      image: Project1,
      link: "https://www.srigruhafoods.in/",
      projectname: "Srigruhafoods",
      projectText:
        "SrigruhaFoods is a platform that allows users to explore and order various food products tailored for local tastes. Using React and Tailwind CSS, it's an awesome experience that significantly improved my designing skills.",
      key1: "REACT",
      key2: "TAILWIND CSS",
    },
    {
      image: Project2,
      link: "https://sairamfoods.in/",
      projectname: "SaiRam Foods",
      projectText:
        "Working on SaiRamFoods, I learned about Framer Motion animations. This project helped me gain more knowledge and improve my productivity significantly.",
      key1: "REACT",
      key2: "TAILWIND CSS",
      key3: "STYLED COMPONENTS",
    },
    {
      image: Project3,
      link: "https://www.vlacksolutions.com/",
      projectname: "Vlack Solutions",
      projectText:
        "Successfully developed our company website using React, Tailwind CSS, and Framer Motion. Incorporating smooth transitions and a fast, responsive user interface for optimal user experience.",
      key1: "REACT",
      key2: "FRAMER MOTION",
      key3: "TAILWIND CSS",
    },
    {
      image: Project4,
      link: "https://koti-vellore-vit-college.netlify.app/",
      projectname: "Vellore Institute Of Technology",
      projectText:
        "Developed as part of the academic curriculum at Vellore Institute of Technology (VIT) using HTML, CSS, JavaScript, and React.js. Built an interactive and responsive web application with clean, modular, and scalable code architecture.",
      key1: "REACT",
      key2: "FRAMER MOTION",
      key3: "TAILWIND CSS",
    },
  ];

  return (
    <div className="min-h-screen px-4 py-12 md:py-20">
      <div className="flex flex-col items-center max-w-7xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="font-bold text-4xl md:text-5xl mb-16 text-center text-gray-900"
        >
          My Projects
        </motion.h1>

        <div className="grid gap-8 md:gap-12 w-full">
          {projectData.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group relative"
            >
              <div className="flex flex-col lg:flex-row bg-white shadow-xl hover:shadow-2xl rounded-3xl overflow-hidden transition-all duration-500 border border-gray-100">
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  className="lg:w-2/5 w-full h-64 lg:h-auto overflow-hidden relative"
                >
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block h-full"
                  >
                    <img
                      src={project.image}
                      alt={project.projectname}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <FiExternalLink className="text-white text-4xl" />
                    </div>
                  </a>
                </motion.div>

                <div className="flex flex-col justify-between p-6 md:p-8 lg:w-3/5">
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                        {project.projectname}
                      </h2>
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-700 transition-colors"
                      >
                        <FiExternalLink className="text-2xl" />
                      </a>
                    </div>
                    <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                      {project.projectText}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2 md:gap-3 mt-6">
                    {project.key1 && (
                      <span className="bg-gradient-to-r from-blue-500 to-blue-600 text-white text-xs md:text-sm px-4 py-2 rounded-full font-medium shadow-md">
                        {project.key1}
                      </span>
                    )}
                    {project.key2 && (
                      <span className="bg-gradient-to-r from-cyan-500 to-cyan-600 text-white text-xs md:text-sm px-4 py-2 rounded-full font-medium shadow-md">
                        {project.key2}
                      </span>
                    )}
                    {project.key3 && (
                      <span className="bg-gradient-to-r from-teal-500 to-teal-600 text-white text-xs md:text-sm px-4 py-2 rounded-full font-medium shadow-md">
                        {project.key3}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
