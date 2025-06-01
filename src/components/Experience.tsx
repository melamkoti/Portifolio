const ExperienceTimeline = () => {
  const experiences = [
    {
      title:
        "Edgerock Software Solutions Private Ltd (Front-End Developer Intern)",
      location: "Full-Time (Hyderabad, India)",
      date: "Nov 2022 - Jan 2024",
      description:
        "Working as a frontend intern closely with a UI/UX team, focusing on learning about the intricacies of user interface and user experience.",
      icon: "🎓",
    },
    {
      title: "Vlack Solutions Pvt Ltd (MERN Stack Developer)",
      location: "Hyderabad, India",
      date: "Jan 2024 - Current",
      description:
        "Upskilled to full-stack proficiency in React.js, Next.js, MongoDB, Express.js, and Node.js, building scalable web applications with a focus on performance and user experience.",
      icon: "⚛️",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">
        My Experience
      </h1>
      <div className="flex justify-center">
        <div className="relative flex flex-col items-center w-full max-w-2xl px-4">
          {/* Vertical timeline line */}
          <div className="absolute top-0 left-6 bottom-0 w-1 bg-red-200 rounded-full"></div>

          {experiences.map((exp, index) => (
            <div key={index} className="flex items-start mb-12 w-full">
              {/* Icon Circle */}
              <div className="z-10 flex items-center justify-center w-12 h-12 bg-white border-4 border-red-600 rounded-full text-red-300 text-xl font-bold shadow-md">
                {exp.icon}
              </div>

              {/* Card */}
              <div className="ml-10 bg-white p-6 rounded-lg shadow-md w-full">
                <h3 className="text-xl font-semibold text-gray-800">
                  {exp.title}
                </h3>
                <p className="text-sm text-gray-500">{exp.location}</p>
                <p className="text-sm text-gray-400 mb-2">{exp.date}</p>
                <p className="text-gray-700 text-sm">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperienceTimeline;
