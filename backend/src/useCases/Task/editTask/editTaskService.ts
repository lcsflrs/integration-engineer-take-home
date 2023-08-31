import { ITask } from "../../../@types";

interface DTO {
  tasks: ITask[];
  taskId: number;
  body: {
    title: string;
    description: string;
  };
}

const editTaskService = (dto: DTO) => {
  const { tasks, taskId, body } = dto;

  const taskIndex = tasks.findIndex((task) => task.id === taskId);

  if (taskIndex === -1) {
    return tasks;
  }

  const updatedTask = {
    ...tasks[taskIndex],
    ...body,
  };

  tasks[taskIndex] = updatedTask;

  return tasks;
};

module.exports = editTaskService;
