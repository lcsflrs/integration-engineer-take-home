import { memo } from "react";
import { twMerge } from "tailwind-merge";
import BaseButton from "../Buttons/BaseButton";
import TextButton from "../Buttons/TextButton";

interface TaskCardDefaultButtonsProps {
  buttonText: "Done" | "Undo";
  handleDelete: () => void;
  handleDone: () => void;
  handleEdit: () => void;
}

const TaskCardDefaultButtons = memo(
  ({
    buttonText,
    handleDelete,
    handleDone,
    handleEdit,
  }: TaskCardDefaultButtonsProps) => (
    <div className="flex items-center w-full px-2 pb-2">
      <TextButton
        text="Delete"
        className="pl-2 text-red-500 hover:text-red-300"
        onClick={handleDelete}
      />

      <div className="flex gap-2 ml-auto">
        <TextButton text="Edit" onClick={handleEdit} className="" />
        <BaseButton
          onClick={handleDone}
          className={twMerge(
            buttonText === "Done"
              ? "bg-green-700 hover:bg-green-600 hover:shadow-green"
              : "bg-yellow-700 hover:bg-yellow-600 hover:shadow-yellow"
          )}
          text={buttonText}
        />
      </div>
    </div>
  )
);

export default TaskCardDefaultButtons;
