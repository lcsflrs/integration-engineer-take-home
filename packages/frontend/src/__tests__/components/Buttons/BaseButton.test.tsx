import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import BaseButton from "../../../components/Buttons/BaseButton";

describe("BaseButton", () => {
  it("should render correctly", () => {
    render(<BaseButton text="Test" onClick={() => {}} />);

    const button = screen.getByRole("button");

    expect(button).toBeInTheDocument();
  });

  it("should call onClick when clicked", () => {
    const onClick = jest.fn();
    render(<BaseButton text="Test" onClick={onClick} />);

    const button = screen.getByRole("button");
    button.click();

    expect(onClick).toHaveBeenCalled();
  });

  it("should render the text correctly", () => {
    render(<BaseButton text="Test" onClick={() => {}} />);

    const button = screen.getByRole("button");

    expect(button).toHaveTextContent("Test");
  });

  it("should render the className correctly", () => {
    render(
      <BaseButton
        text="Test"
        onClick={() => {}}
        className="text-black bg-red-500"
      />
    );

    const button = screen.getByRole("button");

    expect(button).toHaveClass("bg-red-500 text-black");
  });
});
