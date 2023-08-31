import { useEffect, useState } from "react";

import { ITask } from "./@types";
import CreateTaskCard from "./components/CreateTaskCard/CreateTaskCard";
import TaskCard from "./components/TaskCard/TaskCard";

function App() {
  const [tasks, setTasks] = useState<ITask[]>([]);

  useEffect(() => {
    const fetchTasks = async () => {
      const response = await fetch("http://localhost:8000/tasks");
      const tasks = await response.json();
      setTasks(tasks);
    };

    fetchTasks();
  }, []);

  const handleDelete = async (id: number) => {
    const response = await fetch(`http://localhost:8000/tasks/${id}`, {
      method: "DELETE",
    });

    const tasks = await response.json();
    setTasks(tasks);
  };

  const handleToggleDone = async (id: number) => {
    const response = await fetch(`http://localhost:8000/tasks/done/${id}`, {
      method: "PATCH",
    });

    const tasks = await response.json();
    setTasks(tasks);
  };

  return (
    <div className="w-full max-w-2xl px-4 mx-auto ">
      <h1 className="mt-16 text-4xl font-bold text-center">
        Task Management App
      </h1>

      <CreateTaskCard setTasks={setTasks} />

      <ul className="flex flex-col gap-2 mt-4">
        {tasks.map((task) => (
          <li key={task.id}>
            <TaskCard
              task={task}
              onDelete={handleDelete}
              onDone={handleToggleDone}
              setTasks={setTasks}
            />
          </li>
        ))}
        <div className="h-20" />
      </ul>
    </div>
  );
}

export default App;
