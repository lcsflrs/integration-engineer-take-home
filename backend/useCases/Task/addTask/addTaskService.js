/**
 * Adds a new task to the list of tasks and updates the next task ID.
 *
 * @param {Object} dto - Data Transfer Object containing task-related data.
 * @param {number} dto.nextTaskId - The next available task ID.
 * @param {Object} dto.body - The request body containing task details.
 * @param {string} dto.body.title - The title of the new task.
 * @param {string} dto.body.description - The description of the new task.
 * @param {Object[]} dto.tasks - The array of existing tasks.
 * @returns {Object} An object containing updated task list and next task ID.
 */
const addTaskService = (dto) => {
  const newTask = {
    id: dto.nextTaskId,
    title: dto.body.title,
    description: dto.body.description,
  };

  dto.tasks.push(newTask);
  const nextTaskId = dto.nextTaskId + 1;

  return {
    tasks: dto.tasks,
    nextTaskId,
  };
};

module.exports = addTaskService;
