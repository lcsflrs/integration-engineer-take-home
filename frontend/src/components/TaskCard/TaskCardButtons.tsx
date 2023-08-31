import { memo } from "react";
import { twMerge } from "tailwind-merge";
import BaseButton from "../Buttons/BaseButton";
import TextButton from "../Buttons/TextButton";

interface TaskCardButtonsProps {
  buttonText: "Done" | "Undo";
  handleDelete: () => void;
  handleDone: () => void;
}

const TaskCardButtons = memo(
  ({ buttonText, handleDelete, handleDone }: TaskCardButtonsProps) => (
    <div className="flex gap-2 mt-4 ml-auto">
      <TextButton
        text="Delete"
        className="text-red-500 hover:text-red-300"
        onClick={handleDelete}
      />
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
  )
);

export default TaskCardButtons;
