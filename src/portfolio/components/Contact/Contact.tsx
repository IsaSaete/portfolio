import type { PortfolioLinkData } from "../../data/types";
import PortfolioLinkList from "../PortfolioLinkList/PortfolioLinkList";
import "./Contact.css";

interface ContactProps {
  links: PortfolioLinkData[];
}

const Contact: React.FC<ContactProps> = ({ links }) => {
  return (
    <section id="contact" className="contact" aria-labelledby="contact-title">
      <div className="contact__container">
        <h2 id="contact-title" className="contact__title">
          Contacto
        </h2>
        <p className="contact__description">
          ¿Tienes un proyecto o una oportunidad? Escríbeme.
        </p>
        <PortfolioLinkList
          links={links}
          ariaLabel="Formas de contacto y redes sociales"
        />
      </div>
    </section>
  );
};

export default Contact;
