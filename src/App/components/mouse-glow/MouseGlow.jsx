import { useEffect, useRef, useState } from "react";
import "./mouse-glow.scss";

function MouseGlow() {
  const [isEnabled, setIsEnabled] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  const [isPointerHover, setIsPointerHover] = useState(false);
  const isVisibleRef = useRef(false);
  const isPointerRef = useRef(false);
  const ringRef = useRef(null);
  const dotRef = useRef(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const isTouchDevice = "ontouchstart" in window;
    if (prefersReducedMotion || isTouchDevice) {
      setIsEnabled(false);
      return;
    }

    document.body.classList.add("custom-cursor-enabled");

    let rafId = null;
    const pointer = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const ring = { x: pointer.x, y: pointer.y };
    const ringEase = 0.18;

    const handleMouseMove = (e) => {
      pointer.x = e.clientX;
      pointer.y = e.clientY;

      const target = e.target;
      const isPointerLike =
        target instanceof Element &&
        (target.closest(
          "a, button, [role='button'], input, textarea, select, label, summary"
        ) ||
          window.getComputedStyle(target).cursor === "pointer");

      if (isPointerRef.current !== Boolean(isPointerLike)) {
        isPointerRef.current = Boolean(isPointerLike);
        setIsPointerHover(Boolean(isPointerLike));
      }

      if (!isVisibleRef.current) {
        isVisibleRef.current = true;
        setIsVisible(true);
      }
    };

    const handleMouseLeave = () => {
      isVisibleRef.current = false;
      isPointerRef.current = false;
      setIsVisible(false);
      setIsPointerHover(false);
    };
    const handleMouseEnter = () => {
      isVisibleRef.current = true;
      setIsVisible(true);
    };

    const animate = () => {
      ring.x += (pointer.x - ring.x) * ringEase;
      ring.y += (pointer.y - ring.y) * ringEase;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${pointer.x}px, ${pointer.y}px, 0)`;
      }
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ring.x}px, ${ring.y}px, 0)`;
      }

      rafId = window.requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseenter", handleMouseEnter);
    document.documentElement.addEventListener("mouseleave", handleMouseLeave);
    rafId = window.requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseenter", handleMouseEnter);
      document.documentElement.removeEventListener("mouseleave", handleMouseLeave);
      if (rafId) window.cancelAnimationFrame(rafId);
      document.body.classList.remove("custom-cursor-enabled");
    };
  }, []);

  if (!isEnabled) return null;

  return (
    <>
      <div
        ref={ringRef}
        className={`mouse-cursor-ring ${isVisible ? "is-visible" : ""} ${
          isPointerHover ? "is-pointer" : ""
        }`}
        aria-hidden="true"
      />
      <div
        ref={dotRef}
        className={`mouse-cursor-dot ${isVisible ? "is-visible" : ""} ${
          isPointerHover ? "is-pointer" : ""
        }`}
        aria-hidden="true"
      />
    </>
  );
}

export default MouseGlow;
