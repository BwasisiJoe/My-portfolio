import { useEffect, useState } from "react";
import "./mouse-glow.scss";

function MouseGlow() {
  const [isEnabled, setIsEnabled] = useState(true);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const isTouchDevice = "ontouchstart" in window;
    if (prefersReducedMotion || isTouchDevice) {
      setIsEnabled(false);
      return;
    }

    const handleMouseMove = (e) => {
      document.documentElement.style.setProperty("--glow-x", `${e.clientX}px`);
      document.documentElement.style.setProperty("--glow-y", `${e.clientY}px`);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);

    window.addEventListener("mousemove", handleMouseMove);
    document.documentElement.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.documentElement.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [isVisible]);

  if (!isEnabled) return null;

  return (
    <div
      className={`mouse-glow ${isVisible ? "mouse-glow--visible" : ""}`}
      aria-hidden="true"
    />
  );
}

export default MouseGlow;
