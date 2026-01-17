import type { Link } from "../data/types";

export const emailFixture: Link = {
  href: "mailto:fanflins@example.com",
  label: "Email",
  icon: "",
  external: false,
  ariaLabel: "",
  download: "",
};

export const LinkedinFixture: Link = {
  href: "https://linkedin.com/in/fanflins",
  label: "LinkedIn",
  icon: "",
  external: false,
  ariaLabel: "",
  download: "",
};

export const githubFixture: Link = {
  href: "https://github.com/fanflins",
  label: "GitHub",
  icon: "",
  external: true,
  ariaLabel: "",
  download: "",
};

export const linksFixtures: Link[] = [
  emailFixture,
  LinkedinFixture,
  githubFixture,
];
