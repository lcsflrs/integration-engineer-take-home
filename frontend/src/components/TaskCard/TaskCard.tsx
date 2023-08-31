import { yupResolver } from "@hookform/resolvers/yup";
import { memo, useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { twMerge } from "tailwind-merge";
import * as yup from "yup";
import { ITask } from "../../@types";
import TaskCardDefaultButtons from "./TaskCardDefaultButtons";
import TaskCardEditButtons from "./TaskCardEditButtons";

interface TaskCardProps {
  task: ITask;
  onDelete: (id: number) => void;
  onDone: (id: number) => void;
  setTasks: React.Dispatch<React.SetStateAction<ITask[]>>;
}

const TaskCard = memo(({ task, onDelete, onDone, setTasks }: TaskCardProps) => {
  const [isEditing, setIsEditing] = useState(false);

  const createTaskSchema = yup.object().shape({
    title: yup.string().required("Title is required"),
    description: yup.string().required("Description is required"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setError,
  } = useForm({
    resolver: yupResolver(createTaskSchema),
    defaultValues: {
      title: task.title,
      description: task.description,
    },
  });

  const handleDelete = () => {
    onDelete(task.id);
  };

  const handleDone = () => {
    onDone(task.id);
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleCancel = () => {
    reset();
    setIsEditing(false);
  };

  const handleSave = async (values: FieldValues) => {
    const response = await fetch(`http://localhost:8000/tasks/${task.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    });

    if (response.status === 400) {
      const errorData = await response.json();

      if (errorData.type === "MissingFields") {
        errorData.missingFields.forEach((field: "title" | "description") => {
          setError(field, {
            type: "manual",
            message: `${
              field.substring(0, 1).toUpperCase() + field.substring(1)
            } is required`,
          });
        });

        return;
      }
    }

    const tasks = await response.json();
    setTasks(tasks);
    setIsEditing(false);
  };

  return (
    <div
      className={twMerge(
        "flex flex-col w-full bg-brand-gray-1 rounded-xl transition-all",
        isEditing && "bg-brand-gray-2",
        task.done && " bg-brand-gray-3 opacity-95"
      )}
    >
      {isEditing ? (
        <form onSubmit={handleSubmit(handleSave)} className="px-4 pt-4 ">
          <input
            className="w-full px-4 py-2 text-xl font-semibold rounded-lg"
            type="text"
            {...register("title")}
          />
          <p className="mt-2 text-sm text-red-600">
            {`${errors[`title`]?.message ?? ``}`}
          </p>
          <input
            className="w-full px-4 py-2 mt-2 rounded-lg"
            type="text"
            {...register("description")}
          />
          <p className="mt-2 text-sm text-red-600">
            {`${errors[`description`]?.message ?? ``}`}
          </p>
          <TaskCardEditButtons
            handleCancel={handleCancel}
            handleSave={() => null}
          />
        </form>
      ) : (
        <>
          <div className="px-4 pt-4">
            <h3 className="text-xl font-semibold break-words ">{task.title}</h3>
            <p className="mt-2 mb-4 break-words">{task.description}</p>
          </div>
          <TaskCardDefaultButtons
            buttonText={task.done ? "Undo" : "Done"}
            handleDelete={handleDelete}
            handleDone={handleDone}
            handleEdit={handleEdit}
          />
        </>
      )}
    </div>
  );
});

export default TaskCard;
