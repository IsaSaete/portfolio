import { render, screen } from "@testing-library/react";
import HeroLink from "./HeroLink";
import { linkedInLink } from "../../data/links";

describe("Given the HeroLinks component", () => {
  describe("When it receives a linkedin data link", () => {
    test("Then it should show a 'LinkedIn' link", () => {
      const expetedLinkText = /linkedIn/i;

      render(<HeroLink link={linkedInLink} />);

      const linkedinLink = screen.getByRole("link", {
        name: expetedLinkText,
      });

      expect(linkedinLink).toBeInTheDocument();
    });
  });
});
