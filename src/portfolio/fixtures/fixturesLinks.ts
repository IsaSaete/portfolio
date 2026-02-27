import type { PortfolioLinkData } from "../data/types";

export const emailFixture: PortfolioLinkData = {
  href: "mailto:adalovelave@example.com",
  label: "Email",
  icon: "",
  external: false,
  ariaLabel: "",
  download: "",
};

export const LinkedinFixture: PortfolioLinkData = {
  href: "https://linkedin.com/in/adalovelave",
  label: "LinkedIn",
  icon: "",
  external: false,
  ariaLabel: "",
  download: "",
};

export const githubFixture: PortfolioLinkData = {
  href: "https://github.com/adalovelave",
  label: "GitHub",
  icon: "",
  external: true,
  ariaLabel: "",
  download: "",
};

export const linksFixtures: PortfolioLinkData[] = [
  emailFixture,
  LinkedinFixture,
  githubFixture,
];
