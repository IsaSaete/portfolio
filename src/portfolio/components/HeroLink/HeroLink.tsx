import type { HeroLinkData } from "../../data/types";

interface HeroLinkProps {
  link: HeroLinkData;
}

const HeroLink: React.FC<HeroLinkProps> = ({ link }) => {
  const IconComponent = link.icon;

  return (
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
  );
};

export default HeroLink;
