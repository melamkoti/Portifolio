import Project1 from "../../assets/Screenshot 2024-11-04 151403.png";
import Project2 from "../../assets/Screenshot 2024-11-04 151449.png";
import Project3 from "../../assets/Screenshot 2024-11-04 151514.png";
import Project4 from "../../assets/Screenshot 2024-11-04 152421.png";
import { motion } from "framer-motion";
const projects = () => {
  const projectData = [
    {
      image: Project1,
      link: "https://www.srigruhafoods.in/",
      projectname: "Srigruhafoods",
      projectText:
        "“SrigruhaFoods is a platform that allows users to explore and order various food products tailored for local tastes.” i was using react and tailwind css it's very awasome experience i have more improve  my designing skills. ",
      key1: "REACT ",
      key2: "TAILWIND CSS",
    },
    {
      image: Project2,
      link: "https://sairamfoods.in/",
      projectname: "SaiRam foods.",

      projectText:
        "“SaiRamFoods i was working on this site i dont have idea about framer motion once build it i have more knowledge it” i was improve my productvity. ",
      key1: "REACT ",
      key2: "TAILWIND CSS",
      key3: "STYLED COMPONENTS",
    },
    {
      image: Project3,
      link: "https://www.vlacksolutions.com/",
      projectname: "Vlack Solutions",

      projectText:
        "I’m thrilled to announce that I have successfully developed our company website using React, Tailwind CSS, and Framer Motion! Utilizing Framer Motion, we’ve incorporated smooth transitions, The React framework allows for a fast, responsive user interface.",
      key1: "REACT ",
      key2: "FRAMER MOTION",
      key3: "TAILWIND CSS",
    },
    {
      image: Project4,
      link: "https://koti-vellore-vit-college.netlify.app/",
      projectname: "Vallore Institue Of technology",

      projectText:
        "This project is developed as part of the academic curriculum at Vellore Institute of Technology (VIT). t using HTML, CSS, JavaScript, and React.js. The goal of this project is to build an interactive and responsive web application that enhances user experience while maintaining clean, modular, and scalable code architecture.",

      key1: "REACT ",
      key2: "FRAMER MOTION",
      key3: "TAILWIND CSS",
    },
  ];

  return (
    <div className="bg-gray-50 py-12">
      <div className="flex flex-col items-center">
        <h1 className="font-bold text-4xl mb-10 text-center text-gray-800">
          My Projects
        </h1>

        <div className="grid gap-10 md:grid-cols-1 lg:grid-cols-1 px-4 w-full max-w-5xl">
          {projectData.map((project, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col md:flex-row bg-white shadow-xl rounded-xl overflow-hidden transition-all duration-300"
            >
              {/* Project Image */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="md:w-1/3 w-full overflow-hidden"
              >
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={project.image}
                    alt={`Project ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </a>
              </motion.div>

              {/* Project Info */}
              <div className="flex flex-col justify-between p-6 md:w-2/3">
                <div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-2">
                    {project.projectname}
                  </h2>
                  <p className="text-gray-600 text-sm">{project.projectText}</p>
                </div>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.key1 && (
                    <span className="bg-gray-800 text-white text-xs px-3 py-1 rounded-full">
                      {project.key1}
                    </span>
                  )}
                  {project.key2 && (
                    <span className="bg-gray-800 text-white text-xs px-3 py-1 rounded-full">
                      {project.key2}
                    </span>
                  )}
                  {project.key3 && (
                    <span className="bg-gray-800 text-white text-xs px-3 py-1 rounded-full">
                      {project.key3}
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default projects;
