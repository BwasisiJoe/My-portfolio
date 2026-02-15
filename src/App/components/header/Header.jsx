import "./header.scss"
import CallToAction from "./CallToAction"
import HeaderSocials from "./HeaderSocials"
import ReactTypingEffect from "react-typing-effect"
import { useEffect, useRef, useState } from "react"

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
      { threshold: 0.45 }
    )

    observer.observe(headerSection)
    return () => observer.disconnect()
  }, [])

  return (
    <header id="home" className="header">
      <div className="container header__container">
        <div className="name_description">
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
              Experienced Rwandan Software Developer with over 4 years of
              hands-on expertise in
              <br /> designing and building robust, scalable software solutions.
              <br /> Proficient in developing sophisticated applications using
              modern,
              <br /> cutting-edge technologies to solve real-world problems and
              drive business value.
            </p>
          </div>
        </div>
        <CallToAction key={`cta-${nameAnimationKey}`} />
        <div className="container">
          <HeaderSocials />
        </div>
        <a href="#contact" className="scroll__down">
          <span></span>
          <span></span>
          <span></span>
        </a>
      </div>
    </header>
  )
}

export default Header
