import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CreateTaskCard from "../../../components/CreateTaskCard/CreateTaskCard";

describe("CreateTaskCard", () => {
  it("should render correctly", () => {
    render(<CreateTaskCard setTasks={() => null} />);

    const title = screen.getByText("Create Task");
    const titleInput = screen.getByRole("textbox", { name: "title" });
    const descriptionInput = screen.getByRole("textbox", {
      name: "description",
    });

    expect(title).toBeInTheDocument();
    expect(titleInput).toBeInTheDocument();
    expect(descriptionInput).toBeInTheDocument();
  });

  describe("when the inputs are empty", () => {
    it("should display an error message on submit", async () => {
      render(<CreateTaskCard setTasks={() => null} />);

      const createButton = screen.getByRole("button", { name: "Create" });

      await userEvent.click(createButton);

      const titleError = screen.getByText("Title is required");
      const descriptionError = screen.getByText("Description is required");

      expect(titleError).toBeInTheDocument();
      expect(descriptionError).toBeInTheDocument();
    });
  });
});
