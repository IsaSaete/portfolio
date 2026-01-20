import { FileText, Github, Linkedin, Mail } from "lucide-react";
import type { HeroLinkData } from "./types";

export const curriculum: HeroLinkData = {
  href: "src/portfolio/data/cv-isabel.pdf",
  label: "CV",
  icon: FileText,
  external: false,
  ariaLabel: "Descargar currículum de Isabel Sáenz vitae en PDF",
  download: "cv-isabel.pdf",
};

export const linkedInLink: HeroLinkData = {
  href: "https://www.linkedin.com/in/isa-saenz/",
  label: "LinkedIn",
  icon: Linkedin,
  external: true,
  ariaLabel: "Visitar perfil de LinkedIn",
};

export const gitHubLink: HeroLinkData = {
  href: "https://github.com/IsaSaete",
  label: "GitHub",
  icon: Github,
  external: true,
  ariaLabel: "Visitar perfil de GitHub",
};

export const email: HeroLinkData = {
  href: "mailto:isasaete@gmail.com",
  label: "Email",
  icon: Mail,
  external: false,
  ariaLabel: "Enviar correo electrónico a Isabel Sáenz",
};

export const isabelSaenzLinks: HeroLinkData[] = [
  curriculum,
  linkedInLink,
  gitHubLink,
  email,
];
