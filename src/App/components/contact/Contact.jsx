import { useEffect, useRef, useState } from "react";
import { BsInstagram, BsLinkedin, BsTwitterX } from "react-icons/bs";
import "./contact.scss";

function Contact() {
  const [isInView, setIsInView] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const contactRef = useRef(null);

  useEffect(() => {
    const section = contactRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        // Enables/disables section animation state based on viewport visibility.
        setIsInView(entry.isIntersecting);
      },
      {
        threshold: 0.22,
        rootMargin: "-8% 0px -12% 0px",
      }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // UI-only confirmation for now; hook API/email service here when backend is ready.
    setSubmitted(true);
    e.currentTarget.reset();
  };

  return (
    <section
      id="contact"
      ref={contactRef}
      className={`contact ${isInView ? "contact--in-view" : ""}`}
    >
      <div className="container">
        <div className="contact__card">
          <p className="contact__label">CONTACT</p>
          <h2 className="contact__title">Let&apos;s talk.</h2>
          <p className="contact__subtitle">
            Open to full-time, contract, and freelance opportunities where we can
            build useful products with real impact.
          </p>

          <div className="contact__content">
            <div className="contact__left">
              <p className="contact__mini-title">Find me online</p>
              <div className="contact__actions">
                <a
                  href="https://x.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact__chip"
                >
                  <BsTwitterX />
                  @joshua
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact__chip"
                >
                  <BsInstagram />
                  @joshua.dev
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact__chip"
                >
                  <BsLinkedin />
                  linkedin
                </a>
              </div>
            </div>

            <form className="contact__form" onSubmit={handleSubmit}>
              <label className="contact__field">
                <span>Name</span>
                <input type="text" name="name" required placeholder="Your name" />
              </label>
              <label className="contact__field">
                <span>Email</span>
                <input type="email" name="email" required placeholder="your@email.com" />
              </label>
              <label className="contact__field">
                <span>Message</span>
                <textarea
                  name="message"
                  rows="4"
                  required
                  placeholder="Tell me about your project..."
                />
              </label>
              <button type="submit" className="contact__submit">
                Send Message
              </button>
              {submitted && (
                <p className="contact__success">
                  Thanks! Your message is queued. I will get back to you soon.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;