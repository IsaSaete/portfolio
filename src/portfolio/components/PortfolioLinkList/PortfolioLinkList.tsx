import type { PortfolioLinkData } from "../../data/types";
import PortfolioLink from "../PortfolioLink/PortfolioLink";
import "./PortfolioLinkList.css";

interface PortfolioLinkListProps {
  links: PortfolioLinkData[];
  ariaLabel: string;
}

const PortfolioLinkList: React.FC<PortfolioLinkListProps> = ({
  links,
  ariaLabel,
}) => {
  return (
    <nav aria-label={ariaLabel}>
      <ul className="portfolio-link-list">
        {links.map((link) => {
          return (
            <li key={link.href} className="portfolio-link-list__item">
              <PortfolioLink link={link} />
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default PortfolioLinkList;
