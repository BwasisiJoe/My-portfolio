import { useEffect, useState } from "react";
import "./navigation.scss";
import { FiHome } from "react-icons/fi";
import { FcAbout } from "react-icons/fc";
import { FaBriefcase } from "react-icons/fa";
import { GiSkills } from "react-icons/gi";
import { BiMessageRoundedDetail } from "react-icons/bi";
import { BsChatQuote } from "react-icons/bs";


function Navigation() {
  const [active, setActive] = useState("home");

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (!section) return;
    section.scrollIntoView({ behavior: "smooth", block: "start" });
    setActive(id);
    // Keep URL clean (no #fragments)
    if (window.location.hash) {
      window.history.replaceState(null, "", window.location.pathname + window.location.search);
    }
  };

  useEffect(() => {
    const sectionIds = ["home", "about", "experience", "expertise", "testimonials", "contact"];
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    if (sections.length === 0) return;

    setActive("home");

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visibleEntries.length > 0) {
          const currentSectionId = visibleEntries[0].target.id;
          setActive(currentSectionId);
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
        href="/"
        onClick={(e) => {
          e.preventDefault();
          scrollToSection("home");
        }}
        className={active === "home" ? "active  nav_btn" : " nav_btn"}
        data-tooltip="Home"
        aria-label="Home"
      >
        <FiHome />
      </a>
      <a
        href="/"
        onClick={(e) => {
          e.preventDefault();
          scrollToSection("about");
        }}
        className={active === "about" ? "active  nav_btn" : " nav_btn"}
        data-tooltip="About"
        aria-label="About"
      >
        <FcAbout />
      </a>
      <a
        href="/"
        onClick={(e) => {
          e.preventDefault();
          scrollToSection("experience");
        }}
        className={active === "experience" ? "active  nav_btn" : " nav_btn"}
        data-tooltip="Experience"
        aria-label="Experience"
      >
        <FaBriefcase />
      </a>
      <a
        href="/"
        onClick={(e) => {
          e.preventDefault();
          scrollToSection("expertise");
        }}
        className={active === "expertise" ? "active  nav_btn" : " nav_btn"}
        data-tooltip="Expertise"
        aria-label="Expertise"
      >
        <GiSkills />
      </a>
      <a
        href="/"
        onClick={(e) => {
          e.preventDefault();
          scrollToSection("testimonials");
        }}
        className={active === "testimonials" ? "active  nav_btn" : " nav_btn"}
        data-tooltip="Testimonials"
        aria-label="Testimonials"
      >
        <BsChatQuote />
      </a>
      <a
        href="/"
        onClick={(e) => {
          e.preventDefault();
          scrollToSection("contact");
        }}
        className={active === "contact" ? "active  nav_btn contact-link" : " nav_btn contact-link"}
        data-tooltip="Contact"
        aria-label="Contact"
      >
        <BiMessageRoundedDetail />
      </a>
    </nav>
  );
}

export default Navigation;
