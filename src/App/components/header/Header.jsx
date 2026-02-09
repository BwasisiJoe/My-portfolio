import "./header.scss"
import CallToAction from "./CallToAction"
import HeaderSocials from "./HeaderSocials"
import ReactTypingEffect from "react-typing-effect"

function Header() {
  return (
    <header id="home" className="header">
      <div className="container header__container">
        <div className="name_description">
          <div className="flex flex-wrap justify-center">
            <div className="mt-6">
              <h1 className="names mt-12">MUGABO JOSHUA</h1>
            </div>
          </div>
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
        <CallToAction />
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
