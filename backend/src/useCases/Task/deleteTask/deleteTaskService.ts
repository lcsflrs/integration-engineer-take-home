import { ITask } from "../../../@types";

interface DTO {
  tasks: ITask[];
  taskId: number;
}
const deleteTaskService = (dto: DTO) => {
  const updatedTasks = dto.tasks.filter((task) => task.id !== dto.taskId);

  return updatedTasks;
};

module.exports = deleteTaskService;
