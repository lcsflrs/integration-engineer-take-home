import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import TextButton from "../../../components/Buttons/TextButton";

describe("TextButton", () => {
  it("should render correctly", () => {
    render(<TextButton text="Test" onClick={() => {}} />);

    const button = screen.getByRole("link");

    expect(button).toBeInTheDocument();
  });

  it("should call onClick when clicked", () => {
    const onClick = jest.fn();
    render(<TextButton text="Test" onClick={onClick} />);

    const button = screen.getByRole("link");
    button.click();

    expect(onClick).toHaveBeenCalled();
  });

  it("should render the text correctly", () => {
    render(<TextButton text="Test" onClick={() => {}} />);

    const button = screen.getByRole("link");

    expect(button).toHaveTextContent("Test");
  });

  it("should render the className correctly", () => {
    render(
      <TextButton
        text="Test"
        onClick={() => {}}
        className="text-black bg-red-500"
      />
    );

    const button = screen.getByRole("link");

    expect(button).toHaveClass("bg-red-500 text-black");
  });

  it("should prevent default when clicked", () => {
    const onClick = jest.fn();
    render(<TextButton text="Test" onClick={onClick} />);
    const button = screen.getByRole("link");
    const preventDefault = jest.fn();
    button.onclick = preventDefault;
    button.click();
    expect(preventDefault).toHaveBeenCalled();
  });
});
