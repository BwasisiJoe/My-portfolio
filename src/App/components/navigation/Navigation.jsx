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
    // Keep click response instant while smooth-scroll moves to target section.
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
      .map((id) => ({ id, el: document.getElementById(id) }))
      .filter((section) => section.el);

    if (sections.length === 0) return;

    const updateActiveFromScroll = () => {
      // Anchor line around upper-middle viewport tracks "currently viewed" section better.
      const anchorY = window.scrollY + window.innerHeight * 0.38;

      const containingSection = sections.find(({ el }) => {
        if (!el) return false;
        const top = el.offsetTop;
        const bottom = top + el.offsetHeight;
        return anchorY >= top && anchorY < bottom;
      });

      if (containingSection) {
        setActive(containingSection.id);
        return;
      }

      // Fallback: choose the last section whose top has passed the anchor line.
      const passed = sections
        .filter(({ el }) => el && el.offsetTop <= anchorY)
        .sort((a, b) => (a.el?.offsetTop || 0) - (b.el?.offsetTop || 0));

      if (passed.length > 0) {
        setActive(passed[passed.length - 1].id);
        return;
      }

      setActive("home");
    };

    let ticking = false;
    // Throttle scroll work to one update per animation frame.
    const onScrollOrResize = () => {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(() => {
        updateActiveFromScroll();
        ticking = false;
      });
    };

    updateActiveFromScroll();
    const initialSyncTimer = window.setTimeout(updateActiveFromScroll, 120);

    window.addEventListener("scroll", onScrollOrResize, { passive: true });
    window.addEventListener("resize", onScrollOrResize);

    return () => {
      window.removeEventListener("scroll", onScrollOrResize);
      window.removeEventListener("resize", onScrollOrResize);
      window.clearTimeout(initialSyncTimer);
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
