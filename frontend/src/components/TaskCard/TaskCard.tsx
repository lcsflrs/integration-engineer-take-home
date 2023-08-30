import { ITask } from "../../@types";
import BaseButton from "../Buttons/BaseButton";
import TextButton from "../Buttons/TextButton";

interface TaskCardProps {
  task: ITask;
  onDelete: (id: number) => void;
  onDone: (id: number) => void;
}

const TaskCard = ({ task, onDelete, onDone }: TaskCardProps) => {
  return (
    <div className="w-full bg-brand-gray-1 rounded-xl p-4 flex flex-col">
      <h3 className="text-xl font-semibold">{task.title}</h3>
      <p className="mt-2">{task.description}</p>
      <div className="ml-auto flex gap-2 mt-4 ">
        <TextButton
          text="Delete"
          className="text-red-500 hover:text-red-300"
          onClick={() => onDelete(task.id)}
        />

        <BaseButton
          onClick={() => onDone(task.id)}
          text={task.done ? "Undo" : "Done"}
        />
      </div>
    </div>
  );
};

export default TaskCard;
