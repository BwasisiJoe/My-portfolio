import { useEffect, useRef, useState } from "react";
import { BsQuote } from "react-icons/bs";
import { testimonials } from "../../constants";
import "./testimonials.scss";

function Testimonials() {
  const [isInView, setIsInView] = useState(false);
  const testimonialsRef = useRef(null);

  useEffect(() => {
    const section = testimonialsRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      {
        threshold: 0.2,
        rootMargin: "-8% 0px -12% 0px",
      }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="testimonials"
      ref={testimonialsRef}
      className={`testimonials ${isInView ? "testimonials--in-view" : ""}`}
    >
      <h5>Kind Words</h5>
      <h2>Testimonials</h2>

      <div className="container">
        <div className="testimonials__container">
          {testimonials.map((item, index) => (
            <article
              key={item.name}
              className={`testimonials__card testimonials__card--${index + 1}`}
              style={{ "--testimonial-delay": `${index * 130}ms` }}
            >
              <BsQuote className="testimonials__quote" />

              <img
                src={item.image}
                alt={`${item.name} avatar`}
                className="testimonials__avatar"
              />

              <p className="testimonials__text">{item.testimonial}</p>

              <div className="testimonials__author">
                <h3>{item.name}</h3>
                <p>
                  {item.designation} | {item.company}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;