import { isabelSaenzLinks } from "../../data/links";
import "./HeroLinks.css";

const HeroLinks: React.FC = () => {
  return (
    <nav aria-label="Enlaces de contacto y redes sociales">
      <ul className="links-list">
        {isabelSaenzLinks.map((link, index) => {
          const IconComponent = link.icon;

          return (
            <li key={index} className="links-list__item">
              <a
                className="links-list__link"
                href={link.href}
                target={link.external ? "_blank" : undefined}
                download={link.download}
                aria-label={link.ariaLabel}
                rel={link.external ? "noopener noreferrer" : undefined}
              >
                <span>{link.label}</span>
                {IconComponent && (
                  <IconComponent
                    className="links-list__icon"
                    size={20}
                    aria-hidden="true"
                  />
                )}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default HeroLinks;
