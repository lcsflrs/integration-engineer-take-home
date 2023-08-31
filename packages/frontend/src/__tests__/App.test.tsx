import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import "whatwg-fetch";
import App from "../App";

describe("App", () => {
  it("should render correctly", () => {
    render(<App />);

    const title = screen.getByText("Task Management App");
    const createTaskCard = screen.getByText("Create Task");

    expect(title).toBeInTheDocument();
    expect(createTaskCard).toBeInTheDocument();
  });
});
