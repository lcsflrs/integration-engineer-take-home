import { ITask } from "../../../@types";

interface DTO {
  tasks: ITask[];
  taskId: number;
}
const toggleDoneTaskService = (dto: DTO) => {
  const { tasks, taskId } = dto;

  const task = tasks.find((task) => task.id === taskId);

  if (!task) {
    return tasks;
  }

  task.done = !task.done;

  return tasks;
};

module.exports = toggleDoneTaskService;
