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
  return (
    <section id="expertise" className="expertise">
      <h5>What I Build With</h5>
      <h2>Expertise</h2>

      <div className="container expertise__container">
        {expertiseItems.map(({ title, stack, description, Icon }) => (
          <article key={title} className="expertise__card">
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