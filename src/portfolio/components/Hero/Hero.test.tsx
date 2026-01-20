import { render, screen } from "@testing-library/react";
import Hero from "./Hero";
import { linksFixtures } from "../../fixtures/fixturesLinks";
import { adaLovelaceProfile } from "../../fixtures/fixtures";

describe("Given the Hero component", () => {
  describe("When it receives a Ada Lovelave links & profile data", () => {
    test("Then it should show a Ada Lovelace inside a heading", () => {
      const expectedName = /ada lovelace/i;

      render(<Hero links={linksFixtures} profileData={adaLovelaceProfile} />);

      const profileName = screen.getByRole("heading", {
        name: expectedName,
      });

      expect(profileName).toBeInTheDocument();
    });

    test("Then it should show a GitHub link", () => {
      const expectedLinkLabel = /gitHub/i;

      render(<Hero links={linksFixtures} profileData={adaLovelaceProfile} />);

      const gitHubLink = screen.getByRole("link", { name: expectedLinkLabel });

      expect(gitHubLink).toBeInTheDocument();
    });
  });
});
