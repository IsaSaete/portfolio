import type { TechIcon } from "../../data/types";
import "./About.css";

interface AboutProps {
  text: string;
  techStack: TechIcon[];
}

const About: React.FC<AboutProps> = ({ techStack, text }) => {
  return (
    <section id="about" className="about" aria-labelledby="about-title">
      <div className="about__container">
        <h2 id="about-title" className="about__title">
          Sobre mi
        </h2>
        <p className="about__text">{text}</p>
        <div className="about__stack">
          <h3 className="about__stack-title">Stack tecnológico</h3>
          <ul
            className="about__stack-list"
            aria-label="Tecnologías principales"
          >
            {techStack.map(({ name, iconUrl }) => (
              <li key={name} className="about__stack-item">
                <img
                  src={iconUrl}
                  alt={name}
                  className="about__stack-icon"
                  width={40}
                  height={40}
                  loading="lazy"
                />
                <span className="about__stack-name">{name}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
