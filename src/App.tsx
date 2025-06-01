import { useState, useEffect } from "react";

import Navbar from "./components/navbar";
import Profile from "./components/Profile";
import About from "./components/about";
import Projects from "./components/projects/projects";
import Skills from "./components/skills";
import Experience from "./components/Experience";
import ContactForm from "./components/contactMe";
import "./App.css";
const App = () => {
  const [activeSection, setActiveSection] = useState("home");

  // Function to detect the current section in view
  const handleScroll = () => {
    const sections = [
      "home",
      "about",
      "skills",
      "projects",
      "experience",
      "contact",
    ];
    const scrollPosition = window.scrollY + window.innerHeight / 2;

    sections.forEach((section) => {
      const element = document.getElementById(section);
      if (element) {
        if (
          element.offsetTop <= scrollPosition &&
          element.offsetTop + element.offsetHeight > scrollPosition
        ) {
          setActiveSection(section);
        }
      }
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="boy flex flex-col">
      <Navbar activeSection={activeSection} />
      <div id="home" className="">
        <Profile />
      </div>
      <div id="about" className="">
        <About />
      </div>
      <div id="skills" className="">
        <Skills />
      </div>
      <div id="projects" className="">
        <Projects />
      </div>
      <div id="experience" className="">
        <Experience />
      </div>
      <div id="contact" className="">
        <ContactForm />
      </div>
    </div>
  );
};

export default App;
