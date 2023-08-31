/**
 * Updates the status of a task to completed or not completed.
 * @param {Array} tasks - The array of tasks where the update will be performed.
 * @param {number} taskId - The ID of the task to be updated.
 * @returns {Array} - The updated array of tasks.
 */
const toggleDoneTaskService = (tasks, taskId) => {
  const task = tasks.find((task) => task.id === taskId);

  if (!task) {
    return tasks;
  }

  task.done = !task.done;

  return tasks;
};

module.exports = toggleDoneTaskService;
