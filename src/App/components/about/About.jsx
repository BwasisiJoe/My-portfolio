import "./about.scss"
import {
  FaAward,
  FaLaptopCode,
  FaMapMarkerAlt,
  FaRegLightbulb,
} from "react-icons/fa"
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
            <img src="/src/assets/Me.jpeg" alt="Mugabo Joshua portrait" />
          </div>
        </div>
        <div className="about_me_content">
          <div className="about_cards">
            <article className="about_card">
              <FaAward className="about_icon" />
              <h5>Experience</h5>
              <h2>4 years</h2>
              <small>Building dependable products</small>
            </article>
            <article className="about_card">
              <FaLaptopCode className="about_icon" />
              <h5>Scope</h5>
              <h2>Full Stack</h2>
              <small>From idea to deployment</small>
            </article>
            <article className="about_card">
              <FaMapMarkerAlt className="about_icon" />
              <h5>Location</h5>
              <h2>Hybrid</h2>
              <small>Flexible and collaborative</small>
            </article>
          </div>
          <div className="about_intro">
            <FaRegLightbulb className="about_intro_icon" />
            <p className="about_lead">
              I build fast and scalable products with clean, thoughtful design.
            </p>
          </div>
          <div className="about_highlights">
            <span>Clean Architecture</span>
            <span>Performance First</span>
          </div>
          <p>
            Full-stack developer specializing in Java and JavaScript, with
            hands-on experience in Spring, Node.js, Angular, and React.
          </p>
          <a href="/" onClick={handleTalkToMe} className="btn">
            Talk To Me
          </a>
        </div>
      </div>
    </section>
  )
}

export default About
