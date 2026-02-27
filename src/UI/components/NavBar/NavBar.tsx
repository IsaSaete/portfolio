import { useEffect, useState } from "react";
import "./NavBar.css";
import { Menu, X } from "lucide-react";
import type { NavLink } from "../../../types";

const navLinks: NavLink[] = [
  { label: "Inicio", href: "#hero" },
  { label: "Proyectos", href: "#projects" },
  { label: "Sobre mí", href: "#about" },
  { label: "Contacto", href: "#contact" },
];

const NavBar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent): void => {
      if (event.key === "Escape") setIsMenuOpen(false);
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const handleLinkClick = (): void => setIsMenuOpen(false);

  return (
    <nav className="navbar" role="navigation" aria-label="Navegación principal">
      <div className="navbar__inner">
        <a href="#hero" className="navbar__logo">
          IS
        </a>
        <ul className="navbar__links" role="list">
          {navLinks.map(({ label, href }) => (
            <li key={href}>
              <a href={href} className="navbar__link">
                {label}
              </a>
            </li>
          ))}
        </ul>
        <button
          className="navbar__burger"
          onClick={() => setIsMenuOpen((prev) => !prev)}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
          aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
        >
          {isMenuOpen ? <X size={34} /> : <Menu size={34} />}
        </button>
      </div>

      {/* Menú móvil fullscreen.
          aria-hidden oculta el contenido a lectores de pantalla
          cuando el menú está cerrado. */}
      <div
        id="mobile-menu"
        className={`navbar__mobile ${isMenuOpen ? "navbar__mobile--open" : ""}`}
        aria-hidden={!isMenuOpen}
      >
        <ul className="navbar__mobile-links" role="list">
          {navLinks.map(({ label, href }) => (
            <li key={href}>
              <a
                href={href}
                className="navbar__mobile-link"
                onClick={handleLinkClick}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
