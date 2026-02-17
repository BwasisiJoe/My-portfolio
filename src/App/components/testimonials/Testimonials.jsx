import { BsQuote } from "react-icons/bs";
import { testimonials } from "../../constants";
import "./testimonials.scss";

function Testimonials() {
  return (
    <section id="testimonials" className="testimonials">
      <h5>Kind Words</h5>
      <h2>Testimonials</h2>

      <div className="container">
        <div className="testimonials__container">
          {testimonials.map((item, index) => (
            <article
              key={item.name}
              className={`testimonials__card testimonials__card--${index + 1}`}
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