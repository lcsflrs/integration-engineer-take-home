import { useEffect, useState } from "react";
import { ITask } from "./@types";
import BaseButton from "./components/Buttons/BaseButton";
import TaskCard from "./components/TaskCard/TaskCard";

function App() {
  const [tasks, setTasks] = useState<ITask[]>([]);
  const [formData, setFormData] = useState({ title: "", description: "" });

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    const response = await fetch("http://localhost:8000/tasks");
    const tasks = await response.json();
    setTasks(tasks);
  };

  /* Complete the following functions to hit endpoints on your server */
  const createTask = async () => {};

  const handleDelete = async (id: number) => {
    console.log("delete", id);
  };

  const handleDone = async (id: number) => {
    console.log("done", id);
  };

  return (
    <div className=" w-full mx-auto max-w-2xl px-4">
      <h1 className="mt-16 text-4xl font-bold text-center">
        Task Management App
      </h1>

      <div className="mt-16 flex flex-col items-center">
        <h2 className="text-xl ">Create Task</h2>
        <div className="flex mt-4 flex-col gap-2 md:flex-row md:gap-0">
          <input
            type="text"
            placeholder="Title"
            className="px-4 md:rounded-none md:rounded-l-lg py-2 rounded"
            value={formData.title}
            onChange={(e) =>
              setFormData({ ...formData, title: e.target.value })
            }
          />
          <span className="p-4 bg-brand-gray-1 opacity-70 hidden md:block "></span>
          <input
            type="text"
            className="px-4 md:rounded-none py-2 rounded"
            placeholder="Description"
            value={formData.description}
            onChange={(e) =>
              setFormData({ ...formData, description: e.target.value })
            }
          />
          <BaseButton
            onClick={createTask}
            text="Create"
            className="md:rounded-l-none"
          />
        </div>
      </div>

      <ul className="flex flex-col gap-2 mt-4">
        {tasks.map((task) => (
          <li key={task.id}>
            <TaskCard task={task} onDelete={handleDelete} onDone={handleDone} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
