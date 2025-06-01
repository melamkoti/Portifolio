import "./navbar.css";
import { motion } from "framer-motion";
type NavbarProps = {
  activeSection: string;
};
const Navbar = ({ activeSection }: NavbarProps) => {
  return (
    <motion.div
      initial={{ y: -250 }}
      animate={{ y: 0 }}
      transition={{ delay: 0.2, type: "spring", stiffness: 120 }}
      className="navbar-container"
    >
      <a href="#home" className={activeSection === "home" ? "active" : ""}>
        Home
      </a>
      <a href="#about" className={activeSection === "about" ? "active" : ""}>
        About
      </a>
      <a href="#skills" className={activeSection === "skills" ? "active" : ""}>
        Skills
      </a>
      <a
        href="#projects"
        className={activeSection === "projects" ? "active" : ""}
      >
        Projects
      </a>
      <a
        href="#experience"
        className={activeSection === "experience" ? "active" : ""}
      >
        Experience
      </a>
      <a
        href="#contact"
        className={activeSection === "contact" ? "active" : ""}
      >
        Contact
      </a>
    </motion.div>
  );
};

export default Navbar;
