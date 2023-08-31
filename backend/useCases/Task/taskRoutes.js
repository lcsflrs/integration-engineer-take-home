const express = require("express");
const router = express.Router();

const validateRequestBody = require("./../../utils/validateRequestBody");
const getTasksService = require("./getTasks/getTasksService");
const addTaskService = require("./addTask/addTaskService");
const deleteTaskService = require("./deleteTask/deleteTaskService");
const toggleDoneTaskService = require("./toggleDoneTask/toggleDoneTaskService");
const editTaskService = require("./editTask/editTaskService");

module.exports = (tasks, nextTaskId) => {
  const express = require("express");
  const router = express.Router();

  router.get("/", (req, res, next) => {
    const returnTasks = getTasksService(tasks);
    res.json(returnTasks);
  });

  router.post("/", (req, res, next) => {
    try {
      const missingFields = validateRequestBody(req.body, [
        "title",
        "description",
      ]);

      if (missingFields.length > 0) {
        next({
          type: "missing_fields",
          message: `Missing fields: ${missingFields.join(", ")}`,
          missingFields,
        });

        return;
      }

      const dto = {
        body: req.body,
        nextTaskId,
        tasks,
      };

      const { tasks: newTasks, nextTaskId: newNextTaskId } =
        addTaskService(dto);

      tasks = newTasks;
      nextTaskId = newNextTaskId;

      res.json(tasks);
    } catch (err) {
      next(err);
    }
  });

  router.delete("/:id", (req, res, next) => {
    tasks = deleteTaskService({
      tasks,
      taskId: parseInt(req.params.id),
    });

    res.json(tasks);
  });

  router.patch("/done/:id", (req, res, next) => {
    const { id } = req.params;

    const dto = {
      tasks,
      taskId: parseInt(id, 10),
    };

    tasks = toggleDoneTaskService(dto);

    res.json(tasks);
  });

  router.patch("/:id", (req, res, next) => {
    const { id } = req.params;

    const missingFields = validateRequestBody(req.body, [
      "title",
      "description",
    ]);

    if (missingFields.length > 0) {
      next({
        type: "missing_fields",
        message: `Missing fields: ${missingFields.join(", ")}`,
        missingFields,
      });

      return;
    }

    tasks = editTaskService({
      tasks,
      taskId: parseInt(id),
      body: req.body,
    });

    res.json(tasks);
  });

  return router;
};
