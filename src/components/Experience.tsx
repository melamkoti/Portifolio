import { motion } from "framer-motion";
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";

const ExperienceTimeline = () => {
  const experiences = [
    {
      title: "Front-End Developer Intern",
      company: "Edgerock Software Solutions Private Ltd",
      location: "Hyderabad, India",
      date: "Nov 2022 - Jan 2024",
      description:
        "Working as a frontend intern closely with a UI/UX team, focusing on learning about the intricacies of user interface and user experience.",
      type: "Full-Time",
    },
    {
      title: "MERN Stack Developer",
      company: "Vlack Solutions Pvt Ltd",
      location: "Hyderabad, India",
      date: "Jan 2024 - Current",
      description:
        "Upskilled to full-stack proficiency in React.js, Next.js, MongoDB, Express.js, and Node.js, building scalable web applications with a focus on performance and user experience.",
      type: "Full-Time",
    },
  ];

  return (
    <div className="min-h-screen px-4 py-12 md:py-20">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-16"
      >
        My Experience
      </motion.h1>

      <div className="flex justify-center">
        <div className="relative max-w-4xl w-full">
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-cyan-500 to-blue-500"></div>

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              className={`relative flex items-center mb-12 md:mb-16 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              <div className="absolute left-8 md:left-1/2 w-6 h-6 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full border-4 border-white shadow-lg transform -translate-x-1/2 z-10"></div>

              <div
                className={`w-full md:w-5/12 ${
                  index % 2 === 0 ? "md:pr-12" : "md:pl-12"
                } ml-20 md:ml-0`}
              >
                <motion.div
                  whileHover={{ scale: 1.03, boxShadow: "0 25px 50px rgba(0,0,0,0.15)" }}
                  className="bg-white p-6 md:p-8 rounded-2xl shadow-xl border border-gray-100"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-1">
                        {exp.title}
                      </h3>
                      <p className="text-base md:text-lg font-semibold text-blue-600 mb-3">
                        {exp.company}
                      </p>
                    </div>
                    <FaBriefcase className="text-blue-500 text-2xl flex-shrink-0 ml-2" />
                  </div>

                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-gray-600 text-sm md:text-base">
                      <FaMapMarkerAlt className="mr-2 text-blue-500 flex-shrink-0" />
                      <span>{exp.location}</span>
                    </div>
                    <div className="flex items-center text-gray-600 text-sm md:text-base">
                      <FaCalendarAlt className="mr-2 text-blue-500 flex-shrink-0" />
                      <span>{exp.date}</span>
                    </div>
                  </div>

                  <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                    {exp.description}
                  </p>

                  <div className="mt-4">
                    <span className="inline-block bg-gradient-to-r from-blue-50 to-cyan-50 text-blue-700 text-xs md:text-sm px-3 py-1 rounded-full font-medium border border-blue-200">
                      {exp.type}
                    </span>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperienceTimeline;
