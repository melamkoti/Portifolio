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
    <div className="flex flex-col min-h-screen">
      <Navbar activeSection={activeSection} />
      <div id="home">
        <Profile />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="skills">
        <Skills />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="experience">
        <Experience />
      </div>
      <div id="contact">
        <ContactForm />
      </div>
    </div>
  );
};

export default App;
