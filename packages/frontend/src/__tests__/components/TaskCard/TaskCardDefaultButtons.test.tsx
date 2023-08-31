import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import TaskCardDefaultButtons from "../../../components/TaskCard/TaskCardDefaultButtons";

describe("TaskCardDefaultButtons", () => {
  it("should render correctly", () => {
    render(
      <TaskCardDefaultButtons
        buttonText="Done"
        handleDelete={() => {}}
        handleDone={() => {}}
        handleEdit={() => {}}
      />
    );

    const deleteButton = screen.getByRole("link", { name: "Delete" });
    const editButton = screen.getByRole("link", { name: "Edit" });
    const doneButton = screen.getByRole("button", { name: "Done" });

    expect(deleteButton).toBeInTheDocument();
    expect(editButton).toBeInTheDocument();
    expect(doneButton).toBeInTheDocument();
  });

  it("should call handleDelete when delete button is clicked", () => {
    const handleDelete = jest.fn();
    render(
      <TaskCardDefaultButtons
        buttonText="Done"
        handleDelete={handleDelete}
        handleDone={() => {}}
        handleEdit={() => {}}
      />
    );

    const deleteButton = screen.getByRole("link", { name: "Delete" });
    deleteButton.click();

    expect(handleDelete).toHaveBeenCalled();
  });

  it("should call handleEdit when edit button is clicked", () => {
    const handleEdit = jest.fn();
    render(
      <TaskCardDefaultButtons
        buttonText="Done"
        handleDelete={() => {}}
        handleDone={() => {}}
        handleEdit={handleEdit}
      />
    );

    const editButton = screen.getByRole("link", { name: "Edit" });
    editButton.click();

    expect(handleEdit).toHaveBeenCalled();
  });

  it("should call handleDone when done button is clicked", () => {
    const handleDone = jest.fn();
    render(
      <TaskCardDefaultButtons
        buttonText="Done"
        handleDelete={() => {}}
        handleDone={handleDone}
        handleEdit={() => {}}
      />
    );

    const doneButton = screen.getByRole("button", { name: "Done" });
    doneButton.click();

    expect(handleDone).toHaveBeenCalled();
  });
});
