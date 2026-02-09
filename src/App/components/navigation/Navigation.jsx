import { useEffect, useState } from "react";
import "./navigation.scss";
import { FiHome } from "react-icons/fi";
import { FcAbout } from "react-icons/fc";
import { FaBriefcase } from "react-icons/fa";
import { GiSkills } from "react-icons/gi";
import { BiMessageRoundedDetail } from "react-icons/bi";


function Navigation() {
  const [active, setActive] = useState("#home");

  useEffect(() => {
    const sectionIds = ["home", "about", "experience", "expertise", "contact"];
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    if (sections.length === 0) return;

    if (window.location.hash) {
      setActive(window.location.hash);
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visibleEntries.length > 0) {
          setActive(`#${visibleEntries[0].target.id}`);
        }
      },
      {
        root: null,
        threshold: [0.2, 0.4, 0.6, 0.8],
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
      observer.disconnect();
    };
  }, []);
  return (
    <nav>
      <a
        href="#home"
        onClick={() => setActive("#home")}
        className={active === "#home" ? "active  nav_btn" : " nav_btn"}
        data-tooltip="Home"
        aria-label="Home"
      >
        <FiHome />
      </a>
      <a
        href="#about"
        onClick={() => setActive("#about")}
        className={active === "#about" ? "active  nav_btn" : " nav_btn"}
        data-tooltip="About"
        aria-label="About"
      >
        <FcAbout />
      </a>
      <a
        href="#experience"
        onClick={() => setActive("#experience")}
        className={active === "#experience" ? "active  nav_btn" : " nav_btn"}
        data-tooltip="Experience"
        aria-label="Experience"
      >
        <FaBriefcase />
      </a>
      <a
        href="#expertise"
        onClick={() => setActive("#expertise")}
        className={active === "#expertise" ? "active  nav_btn" : " nav_btn"}
        data-tooltip="Expertise"
        aria-label="Expertise"
      >
        <GiSkills />
      </a>
      <a
        href="#contact"
        onClick={() => setActive("#contact")}
        className={active === "#contact" ? "active  nav_btn contact-link" : " nav_btn contact-link"}
        data-tooltip="Contact"
        aria-label="Contact"
      >
        <BiMessageRoundedDetail />
      </a>
    </nav>
  );
}

export default Navigation;
