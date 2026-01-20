import type { HeroLinkData } from "../data/types";

export const emailFixture: HeroLinkData = {
  href: "mailto:adalovelave@example.com",
  label: "Email",
  icon: "",
  external: false,
  ariaLabel: "",
  download: "",
};

export const LinkedinFixture: HeroLinkData = {
  href: "https://linkedin.com/in/adalovelave",
  label: "LinkedIn",
  icon: "",
  external: false,
  ariaLabel: "",
  download: "",
};

export const githubFixture: HeroLinkData = {
  href: "https://github.com/adalovelave",
  label: "GitHub",
  icon: "",
  external: true,
  ariaLabel: "",
  download: "",
};

export const linksFixtures: HeroLinkData[] = [
  emailFixture,
  LinkedinFixture,
  githubFixture,
];
