import { MapPin } from "lucide-react";
import React from "react";
import "./Footer.css";

interface FooterProps {
  developerName: string;
  location: string;
}

const Footer: React.FC<FooterProps> = ({ developerName, location }) => {
  return (
    <footer className="footer" aria-label="Información de ubicación y derechos">
      <div className="footer__content">
        <div className="footer__location">
          <MapPin className="footer__icon" size={16} aria-hidden="true" />
          <span className="footer__text">{location} · Remoto / Híbrido</span>
        </div>
        <span className="footer__copyright">
          © {new Date().getFullYear()} {developerName}
        </span>
      </div>
    </footer>
  );
};

export default Footer;
