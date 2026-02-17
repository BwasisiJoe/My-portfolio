import "./about.scss"
import { FaAward, FaLaptopCode, FaMapMarkerAlt } from "react-icons/fa"
import { scrollToSection } from "../../utils/scrollToSection"

function About() {
  const handleTalkToMe = (e) => {
    e.preventDefault()
    scrollToSection("contact")
  }

  return (
    <section id="about" className="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about_container">
        <div className="about_me">
          <div className="about_me_img">
            <img src="/src/assets/logo.png" alt="me" />
          </div>
        </div>
        <div className="about_me_content">
          <div className="about_cards">
            <article className="about_card">
              <FaAward className="about_icon" />
              <h5>Experience</h5>
              <h2>4 years</h2>
            </article>
            <article className="about_card">
              <FaLaptopCode className="about_icon" />
              <h5>Scope</h5>
              <h2>Full Stack</h2>
            </article>
            <article className="about_card">
              <FaMapMarkerAlt className="about_icon" />
              <h5>Location</h5>
              <h2>Hybrid</h2>
            </article>
          </div>
          <p>
            Motivated and adaptable software developer specializing in Java and
            JavaScript, with proven experience in delivering full-stack
            solutions. Proficient in Spring, Node.js, ZK, Angular, and React,
            and skilled in OOP and design patterns.
          </p>
          <a href="/" onClick={handleTalkToMe} className="btn">
            Talk To me
          </a>
        </div>
      </div>
    </section>
  )
}

export default About
