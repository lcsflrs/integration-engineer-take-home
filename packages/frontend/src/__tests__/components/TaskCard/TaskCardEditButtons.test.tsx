import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import TaskCardEditButtons from "../../../components/TaskCard/TaskCardEditButtons";

describe("TaskCardEditButtons", () => {
  it("should render correctly", () => {
    render(
      <TaskCardEditButtons handleCancel={() => {}} handleSave={() => {}} />
    );

    const cancelButton = screen.getByRole("link", { name: "Cancel" });
    const saveButton = screen.getByRole("button", { name: "Save" });

    expect(cancelButton).toBeInTheDocument();
    expect(saveButton).toBeInTheDocument();
  });

  it("should call handleCancel when cancel button is clicked", () => {
    const handleCancel = jest.fn();
    render(
      <TaskCardEditButtons handleCancel={handleCancel} handleSave={() => {}} />
    );

    const cancelButton = screen.getByRole("link", { name: "Cancel" });
    cancelButton.click();

    expect(handleCancel).toHaveBeenCalled();
  });

  it("should call handleSave when save button is clicked", () => {
    const handleSave = jest.fn();
    render(
      <TaskCardEditButtons handleCancel={() => {}} handleSave={handleSave} />
    );

    const saveButton = screen.getByRole("button", { name: "Save" });
    saveButton.click();

    expect(handleSave).toHaveBeenCalled();
  });
});
