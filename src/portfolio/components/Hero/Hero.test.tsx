import { render, screen } from "@testing-library/react";
import Hero from "./Hero";
import { adaLovelaceProfile } from "../../fixtures/fixtures";

describe("Given the Hero component", () => {
  describe("When it receives a Ada Lovelace profile", () => {
    test("Then it should show 'Ada Lovelace' inside a heading", () => {
      render(<Hero dataProfile={adaLovelaceProfile} />);

      const userDataName = screen.getByRole("heading", {
        name: adaLovelaceProfile.name,
        level: 1,
      });

      expect(userDataName).toBeInTheDocument();
    });

    test("Then it should show a portrait of Ada Lovelace", () => {
      const imageAlternativeText = adaLovelaceProfile.name;

      render(<Hero dataProfile={adaLovelaceProfile} />);

      const profileImage = screen.getByAltText(imageAlternativeText);

      expect(profileImage).toBeInTheDocument();
    });
  });
});
