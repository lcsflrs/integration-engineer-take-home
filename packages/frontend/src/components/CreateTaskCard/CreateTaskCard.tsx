import { yupResolver } from "@hookform/resolvers/yup";
import { FieldValues, useForm } from "react-hook-form";
import * as yup from "yup";
import { ITask } from "../../@types";
import BaseButton from "../Buttons/BaseButton";

interface CreateTaskCardProps {
  setTasks: React.Dispatch<React.SetStateAction<ITask[]>>;
}

const CreateTaskCard = ({ setTasks }: CreateTaskCardProps) => {
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
  });

  const createTask = async (values: FieldValues) => {
    try {
      const response = await fetch("http://localhost:8000/tasks", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (response.status === 400) {
        const errorData = await response.json();

        if (errorData.type === "missing_fields") {
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

        throw new Error("Something went wrong.");
      }

      const tasks = await response.json();
      setTasks(tasks);
      reset();
    } catch (err) {
      setError("title", {
        type: "manual",
        message: "Something went wrong.",
      });
      setError("description", {
        type: "manual",
        message: "Please, try again.",
      });
    }
  };

  return (
    <form onSubmit={handleSubmit(createTask)}>
      <div className="flex flex-col items-center mt-16">
        <h2 className="text-xl ">Create Task</h2>
        <div className="flex flex-col gap-2 mt-4 md:flex-row md:gap-0">
          <div>
            <input
              type="text"
              aria-label="title"
              placeholder="Title"
              className="px-4 py-2 rounded md:rounded-none md:rounded-l-lg"
              {...register("title", { required: true })}
            />

            <p className="mt-2 text-sm text-red-600">
              {`${errors[`title`]?.message ?? ``}`}
            </p>
          </div>

          <span className="hidden p-4 bg-brand-gray-1 opacity-70 max-h-10 md:block "></span>
          <div>
            <input
              type="text"
              aria-label="description"
              className="px-4 py-2 rounded md:rounded-none"
              placeholder="Description"
              {...register("description", { required: true })}
            />
            <p className="mt-2 text-sm text-red-600">
              {`${errors[`description`]?.message ?? ``}`}
            </p>
          </div>
          <BaseButton
            onClick={() => null}
            text="Create"
            className="md:rounded-l-none md:max-h-10"
          />
        </div>
      </div>
    </form>
  );
};

export default CreateTaskCard;
