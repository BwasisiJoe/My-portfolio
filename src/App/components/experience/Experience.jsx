import { useEffect, useRef, useState } from "react";
import { BsGeoAlt, BsBoxArrowUpRight, BsPlus, BsDash } from "react-icons/bs";
import { experiences } from "../../constants";
import "./experience.scss";

function Experience() {
  const [openId, setOpenId] = useState(-1);
  const [isInView, setIsInView] = useState(false);
  const experienceRef = useRef(null);

  useEffect(() => {
    const section = experienceRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        // Drives section-level class for staggered card entrance animations.
        setIsInView(entry.isIntersecting);
      },
      {
        threshold: 0.22,
        rootMargin: "-10% 0px -12% 0px",
      }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const toggleItem = (id) => {
    // Accordion behavior: open one item at a time, collapse when clicking active.
    setOpenId((prev) => (prev === id ? -1 : id));
  };

  return (
    <section
      id="experience"
      ref={experienceRef}
      className={`experience ${isInView ? "experience--in-view" : ""}`}
    >
      <div className="container experience__container">
        <h5>What I Have Done</h5>
        <h2 className="experience__heading">Professional Experience</h2>

        <div className="experience__list">
          {experiences.map((exp, index) => {
            const isOpen = openId === index;
            return (
              <article
                key={index}
                className={`experience__item ${isOpen ? "is-open" : ""}`}
                // CSS custom property controls per-card reveal delay.
                style={{ "--exp-delay": `${index * 110}ms` }}
              >
                <button
                  type="button"
                  className="experience__header"
                  onClick={() => toggleItem(index)}
                  aria-expanded={isOpen}
                  aria-controls={`experience-body-${index}`}
                  id={`experience-header-${index}`}
                >
                  <div className="experience__title">
                    <h3>
                      {exp.title} @ {exp.company_name}
                    </h3>
                  </div>
                  <div className="experience__meta">
                    <span className="experience__date">{exp.date}</span>
                    <span className="experience__toggle" aria-hidden="true">
                      {isOpen ? <BsDash /> : <BsPlus />}
                    </span>
                  </div>
                </button>

                <div
                  id={`experience-body-${index}`}
                  className="experience__body"
                  role="region"
                  aria-labelledby={`experience-header-${index}`}
                >
                  <div className="experience__details">
                    {(exp.location || exp.website) && (
                      <div className="experience__location-row">
                        {exp.location && (
                          <span className="experience__location">
                            <BsGeoAlt className="experience__icon" />
                            {exp.location}
                          </span>
                        )}
                        {exp.website && (
                          <a
                            href={`https://${exp.website}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="experience__website"
                          >
                            <BsBoxArrowUpRight className="experience__icon" />
                            {exp.website}
                          </a>
                        )}
                      </div>
                    )}

                    {exp.points && exp.points.length > 0 && (
                      <p className="experience__description">
                        {exp.points.join(" ")}
                      </p>
                    )}

                    {exp.skills && exp.skills.length > 0 && (
                      <div className="experience__chips">
                        {exp.skills.map((skill, i) => (
                          <span key={i} className="experience__chip">
                            {skill}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Experience;
