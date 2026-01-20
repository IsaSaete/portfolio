import type { HeroLinkData } from "../../data/types";
import HeroLink from "../HeroLink/HeroLink";
import "./HeroLinksList.css";

interface HeroLinkListProps {
  dataLinks: HeroLinkData[];
}

const HeroLinkList: React.FC<HeroLinkListProps> = ({ dataLinks }) => {
  return (
    <nav aria-label="Enlaces de contacto y redes sociales">
      <ul className="links-list">
        {dataLinks.map((link, index) => {
          return (
            <li key={index} className="links-list__item">
              <HeroLink link={link} />
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default HeroLinkList;
