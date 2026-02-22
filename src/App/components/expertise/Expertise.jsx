import { useEffect, useRef, useState } from "react";
import { FaCode, FaDatabase, FaMobileAlt, FaServer } from "react-icons/fa";
import "./expertise.scss";

const expertiseItems = [
  {
    title: "Backend Development",
    stack: "Spring Boot, Node.js",
    description:
      "Design and build scalable APIs, business logic, and secure services with Spring Boot and Node.js.",
    Icon: FaServer,
  },
  {
    title: "Frontend Development",
    stack: "Angular, React, ZK, HTML",
    description:
      "Create responsive, user-focused interfaces with modern frontend frameworks and component-driven architecture.",
    Icon: FaCode,
  },
  {
    title: "Database",
    stack: "PostgreSQL, MySQL, MongoDB",
    description:
      "Model and manage relational and document databases for reliability, performance, and data integrity.",
    Icon: FaDatabase,
  },
  {
    title: "Mobile Development",
    stack: "Flutter",
    description:
      "Develop cross-platform mobile applications with Flutter for consistent UX across Android and iOS.",
    Icon: FaMobileAlt,
  },
];

function Expertise() {
  const [isInView, setIsInView] = useState(false);
  const expertiseRef = useRef(null);

  useEffect(() => {
    const section = expertiseRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        // Switches reveal class on/off so animation can replay on re-entry.
        setIsInView(entry.isIntersecting);
      },
      {
        threshold: 0.24,
        rootMargin: "-8% 0px -12% 0px",
      }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="expertise"
      ref={expertiseRef}
      className={`expertise ${isInView ? "expertise--in-view" : ""}`}
    >
      <h5>What I Build With</h5>
      <h2>Expertise</h2>

      <div className="container expertise__container">
        {expertiseItems.map(({ title, stack, description, Icon }, index) => (
          <article
            key={title}
            className="expertise__card"
            // Staggered reveal timing for cards in a deterministic order.
            style={{ "--expertise-delay": `${index * 120}ms` }}
          >
            <div className="expertise__head">
              <Icon className="expertise__icon" />
              <div>
                <h3>{title}</h3>
                <p>{stack}</p>
              </div>
            </div>
            <div className="expertise__description-wrap">
              <span className="expertise__code-tag">&lt;h3&gt;</span>
              <p className="expertise__description">{description}</p>
              <span className="expertise__code-tag">&lt;/h3&gt;</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Expertise;