import { BsEnvelope, BsInstagram, BsLinkedin, BsTwitterX } from "react-icons/bs";
import "./contact.scss";

function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="contact__card">
          <p className="contact__label">CONTACT</p>
          <h2 className="contact__title">Let&apos;s talk.</h2>
          <p className="contact__subtitle">
            Open to full-time, contract, and freelance opportunities where we can
            build useful products with real impact.
          </p>

          <div className="contact__actions">
            <a href="mailto:joshua@example.com" className="contact__chip contact__chip--primary">
              <BsEnvelope />
              joshua@example.com
            </a>
            <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="contact__chip">
              <BsTwitterX />
              @joshua
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="contact__chip">
              <BsInstagram />
              @joshua.dev
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="contact__chip">
              <BsLinkedin />
              linkedin
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;