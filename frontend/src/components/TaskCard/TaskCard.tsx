import { memo } from "react";
import { ITask } from "../../@types";
import TaskCardButtons from "./TaskCardButtons";

interface TaskCardProps {
  task: ITask;
  onDelete: (id: number) => void;
  onDone: (id: number) => void;
}

const TaskCard = memo(({ task, onDelete, onDone }: TaskCardProps) => {
  const handleDelete = () => {
    onDelete(task.id);
  };

  const handleDone = () => {
    onDone(task.id);
  };

  return (
    <div className="flex flex-col w-full p-4 bg-brand-gray-1 rounded-xl">
      <h3 className="text-xl font-semibold break-words ">{task.title}</h3>
      <p className="mt-2 break-words ">{task.description}</p>
      <TaskCardButtons
        buttonText={task.done ? "Undo" : "Done"}
        handleDelete={handleDelete}
        handleDone={handleDone}
      />
    </div>
  );
});

export default TaskCard;
