import { render, screen } from "@testing-library/react";
import HeroLinkList from "./HeroLinksList";
import { linksFixtures } from "../../fixtures/fixturesLinks";

describe("Given the HeroLinks component", () => {
  describe("When it receives Email, LinkedIn & GitHub data links", () => {
    test("Then it should show a Email, LinkedIn & GitHub links", () => {
      const emailText = /email/i;
      const linkedinText = /linkedIn/i;
      const gitHubText = /gitHub/i;

      render(<HeroLinkList dataLinks={linksFixtures} />);

      const emailLink = screen.getByRole("link", { name: emailText });
      const linkedinLink = screen.getByRole("link", { name: linkedinText });
      const githubLink = screen.getByRole("link", { name: gitHubText });

      expect(emailLink).toBeInTheDocument();
      expect(linkedinLink).toBeInTheDocument();
      expect(githubLink).toBeInTheDocument();
    });
  });
});
