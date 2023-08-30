/**
 *
 * @param {Object} dto - Data Transfer Object containing task-related data.
 * @param {Object[]} dto.tasks - The array of existing tasks.
 * @param {number} dto.taskId - The ID of the task to be deleted.
 * @returns {Object} An object containing updated task list.
 */
const deleteTaskService = (dto) => {
  const updatedTasks = dto.tasks.filter((task) => task.id !== dto.taskId);

  return updatedTasks;
};

module.exports = deleteTaskService;
