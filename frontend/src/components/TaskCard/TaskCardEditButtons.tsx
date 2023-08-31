import { memo } from "react";
import BaseButton from "../Buttons/BaseButton";
import TextButton from "../Buttons/TextButton";

interface TaskCardEditButtonsProps {
  handleCancel: () => void;
  handleSave: () => void;
}

const TaskCardEditButtons = memo(
  ({ handleCancel, handleSave }: TaskCardEditButtonsProps) => (
    <div className="flex items-center w-full pt-2 pb-2">
      <div className="flex gap-2 ml-auto">
        <TextButton text="Cancel" onClick={handleCancel} />
        <BaseButton
          onClick={handleSave}
          className="bg-green-700 hover:bg-green-600 hover:shadow-green"
          text="Save"
        />
      </div>
    </div>
  )
);

export default TaskCardEditButtons;
