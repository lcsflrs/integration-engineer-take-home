import { NextFunction, Request, Response } from "express";
import { ITask } from "../../@types";

const getTasksService = require("./getTasks/getTasksService");
const addTaskService = require("./addTask/addTaskService");
const deleteTaskService = require("./deleteTask/deleteTaskService");
const toggleDoneTaskService = require("./toggleDoneTask/toggleDoneTaskService");
const editTaskService = require("./editTask/editTaskService");
const validateRequestBody = require("../../utils/validateRequestBody");

module.exports = (tasks: ITask[], nextTaskId: number) => {
  const express = require("express");
  const router = express.Router();

  router.get("/", (req: Request, res: Response, next: NextFunction) => {
    const returnTasks = getTasksService(tasks);
    res.json(returnTasks);
  });

  router.post("/", (req: Request, res: Response, next: NextFunction) => {
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

  router.delete("/:id", (req: Request, res: Response, next: NextFunction) => {
    tasks = deleteTaskService({
      tasks,
      taskId: parseInt(req.params.id),
    });

    res.json(tasks);
  });

  router.patch(
    "/done/:id",
    (req: Request, res: Response, next: NextFunction) => {
      const { id } = req.params;

      const dto = {
        tasks,
        taskId: parseInt(id, 10),
      };

      tasks = toggleDoneTaskService(dto);

      res.json(tasks);
    }
  );

  router.patch("/:id", (req: Request, res: Response, next: NextFunction) => {
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
