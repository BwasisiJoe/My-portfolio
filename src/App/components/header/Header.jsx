import "./header.scss"
import CallToAction from "./CallToAction"
import HeaderSocials from "./HeaderSocials"
import ReactTypingEffect from "react-typing-effect"
import { useEffect, useRef, useState } from "react"
import { scrollToSection } from "../../utils/scrollToSection"

function Header() {
  const [nameAnimationKey, setNameAnimationKey] = useState(0)
  const wasInViewRef = useRef(false)

  useEffect(() => {
    const headerSection = document.getElementById("home")
    if (!headerSection) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        // Replay animation only when section is entered (not while staying visible)
        if (entry.isIntersecting && !wasInViewRef.current) {
          setNameAnimationKey((prev) => prev + 1)
        }
        wasInViewRef.current = entry.isIntersecting
      },
      { threshold: 0.45 },
    )

    observer.observe(headerSection)
    return () => observer.disconnect()
  }, [])

  const handleScrollDown = (e) => {
    e.preventDefault()
    scrollToSection("contact")
  }

  return (
    <header id="home" className="header">
      <div className="container header__container">
        <div className="name_description">
          <p className="hero_badge">Open to impactful projects</p>
          <h1 key={nameAnimationKey} className="names">
            MUGABO JOSHUA
          </h1>
          <div>
            <h3 className="text-light">
              SOFTWARE &nbsp;
              <ReactTypingEffect
                className="typing"
                text={["ENGINEER", "DEVELOPER"]}
              />
            </h3>
          </div>
          <div className="details">
            <p>
              Full-stack software engineer focused on elegant UX, scalable
              architecture, and real-world impact.
            </p>
          </div>
          <div className="hero_chips">
            <span>4+ Years</span>
            <span>Full Stack</span>
            <span>Java + JS</span>
          </div>
        </div>
        <CallToAction key={`cta-${nameAnimationKey}`} />
        <div className="container">
          <HeaderSocials />
        </div>
        <a href="/" onClick={handleScrollDown} className="scroll__down">
          <span></span>
          <span></span>
          <span></span>
        </a>
      </div>
    </header>
  )
}

export default Header
