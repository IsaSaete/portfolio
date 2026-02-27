import type { PortfolioLinkData } from "../../data/types";
import "./PortfolioLink.css";

interface PortfolioLinkProps {
  link: PortfolioLinkData;
}

const PortfolioLink: React.FC<PortfolioLinkProps> = ({ link }) => {
  const IconComponent = link.icon;

  return (
    <a
      className="portfolio-link"
      href={link.href}
      target={link.external ? "_blank" : undefined}
      download={link.download}
      aria-label={link.ariaLabel}
      rel={link.external ? "noopener noreferrer" : undefined}
    >
      <span>{link.label}</span>
      {IconComponent && (
        <IconComponent
          className="portfolio-link__icon"
          size={20}
          aria-hidden="true"
        />
      )}
    </a>
  );
};

export default PortfolioLink;
