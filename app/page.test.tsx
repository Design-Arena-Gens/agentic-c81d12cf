import { render, screen } from "@testing-library/react";
import Page from "./page";

describe("AI Consulting Playbook Page", () => {
  it("renders the hero headline", () => {
    render(<Page />);
    expect(
      screen.getByText("地方中小企業が「AI導入で変わる」と確信するための実践設計")
    ).toBeInTheDocument();
  });
});
