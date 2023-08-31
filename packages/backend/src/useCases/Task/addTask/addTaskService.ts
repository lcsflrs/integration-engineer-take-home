import { ITask } from "../../../@types";

interface DTO {
  tasks: ITask[];
  nextTaskId: number;
  body: {
    title: string;
    description: string;
  };
}
const addTaskService = (dto: DTO) => {
  const newTask = {
    id: dto.nextTaskId,
    title: dto.body.title,
    description: dto.body.description,
    done: false,
  };

  const updatedTasks = [...dto.tasks, newTask];
  const nextTaskId = dto.nextTaskId + 1;

  return {
    tasks: updatedTasks,
    nextTaskId,
  };
};

module.exports = addTaskService;
