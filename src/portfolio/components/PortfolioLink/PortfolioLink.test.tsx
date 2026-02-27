import { render, screen } from "@testing-library/react";
import PortfolioLink from "./PortfolioLink";
import { linkedInLink } from "../../data/links";

describe("Given the PortfolioLinks component", () => {
  describe("When it receives a linkedin data link", () => {
    test("Then it should show a 'LinkedIn' link", () => {
      const expetedLinkText = /linkedIn/i;

      render(<PortfolioLink link={linkedInLink} />);

      const linkedinLink = screen.getByRole("link", {
        name: expetedLinkText,
      });

      expect(linkedinLink).toBeInTheDocument();
    });
  });
});
