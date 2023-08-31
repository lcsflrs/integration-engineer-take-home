import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import TaskCard from "../../../components/TaskCard/TaskCard";

describe("TaskCard", () => {
  it("should render correctly", () => {
    render(
      <TaskCard
        task={{
          id: 1,
          title: "Test",
          description: "Test Description",
          done: false,
        }}
        onDelete={() => null}
        onDone={() => null}
        setTasks={() => null}
      />
    );

    const title = screen.getByText("Test");
    const description = screen.getByText("Test Description");

    expect(title).toBeInTheDocument();
    expect(description).toBeInTheDocument();
  });

  it("should render the edit buttons when edit is true", async () => {
    render(
      <TaskCard
        task={{
          id: 1,
          title: "Test",
          description: "Test Description",
          done: false,
        }}
        onDelete={() => null}
        onDone={() => null}
        setTasks={() => null}
      />
    );

    const editButton = screen.getByRole("link", { name: "Edit" });

    await userEvent.click(editButton);

    const cancelButton = screen.getByRole("link", { name: "Cancel" });
    const saveButton = screen.getByRole("button", { name: "Save" });

    expect(cancelButton).toBeInTheDocument();
    expect(saveButton).toBeInTheDocument();
  });

  it("should render input fields when edit is true", async () => {
    render(
      <TaskCard
        task={{
          id: 1,
          title: "Test",
          description: "Test Description",
          done: false,
        }}
        onDelete={() => null}
        onDone={() => null}
        setTasks={() => null}
      />
    );

    const editButton = screen.getByRole("link", { name: "Edit" });

    await userEvent.click(editButton);

    const titleInput = screen.getByRole("textbox", {
      name: "title",
    });
    const descriptionInput = screen.getByRole("textbox", {
      name: "description",
    });

    expect(titleInput).toBeInTheDocument();
    expect(descriptionInput).toBeInTheDocument();
  });

  describe("when edit is true", () => {
    describe("when title is empty", () => {
      it("should show error message on save", async () => {
        render(
          <TaskCard
            task={{
              id: 1,
              title: "Test",
              description: "Test Description",
              done: false,
            }}
            onDelete={() => null}
            onDone={() => null}
            setTasks={() => null}
          />
        );

        const editButton = screen.getByRole("link", { name: "Edit" });

        await userEvent.click(editButton);

        const titleInput = screen.getByRole("textbox", {
          name: "title",
        });

        await userEvent.clear(titleInput);

        const saveButton = screen.getByRole("button", { name: "Save" });

        await userEvent.click(saveButton);

        const errorMessage = screen.getByText("Title is required");

        expect(errorMessage).toBeInTheDocument();
      });
    });

    describe("when description is empty", () => {
      it("should show error message on save", async () => {
        render(
          <TaskCard
            task={{
              id: 1,
              title: "Test",
              description: "Test Description",
              done: false,
            }}
            onDelete={() => null}
            onDone={() => null}
            setTasks={() => null}
          />
        );

        const editButton = screen.getByRole("link", { name: "Edit" });

        await userEvent.click(editButton);

        const descriptionInput = screen.getByRole("textbox", {
          name: "description",
        });

        await userEvent.clear(descriptionInput);

        const saveButton = screen.getByRole("button", { name: "Save" });

        await userEvent.click(saveButton);

        const errorMessage = screen.getByText("Description is required");

        expect(errorMessage).toBeInTheDocument();
      });
    });
  });
});
