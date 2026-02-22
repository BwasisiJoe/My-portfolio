import { useEffect, useState } from "react";
import "./navigation.scss";
import { FiHome } from "react-icons/fi";
import { FcAbout } from "react-icons/fc";
import { FaBriefcase } from "react-icons/fa";
import { GiSkills } from "react-icons/gi";
import { BiMessageRoundedDetail } from "react-icons/bi";
import { BsChatQuote } from "react-icons/bs";
import { scrollToSection } from "../../utils/scrollToSection";


function Navigation() {
  const [active, setActive] = useState("home");
  
  const handleNavScroll = (id) => {
    scrollToSection(id);
    setActive(id);
    // Keep URL clean (no #fragments)
    if (window.location.hash) {
      window.history.replaceState(
        null,
        "",
        window.location.pathname + window.location.search
      );
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
        const inView = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (inView.length > 0) {
          setActive(inView[0].target.id);
        }
      },
      {
        root: null,
        // Keeps active section aligned with viewport center on large screens.
        rootMargin: "-35% 0px -45% 0px",
        threshold: [0, 0.15, 0.35, 0.55, 0.75],
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
          handleNavScroll("home");
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
          handleNavScroll("about");
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
          handleNavScroll("experience");
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
          handleNavScroll("expertise");
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
          handleNavScroll("testimonials");
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
          handleNavScroll("contact");
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
