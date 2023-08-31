const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const cors = require("cors");

const PORT = process.env.PORT || 8000;

const validateRequestBody = require("./utils/validateRequestBody");
const getTasksService = require("./useCases/Task/getTasks/getTasksService");
const addTaskService = require("./useCases/Task/addTask/addTaskService");
const deleteTaskService = require("./useCases/Task/deleteTask/deleteTaskService");
const toggleDoneTaskService = require("./useCases/Task/toggleDoneTask/toggleDoneTaskService");
const editTaskService = require("./useCases/Task/editTask/editTaskService");

app.use(
  cors({
    origin: "*",
  })
);
app.use(bodyParser.json());

let tasks = [];
let nextTaskId = 1;

app.get("/tasks", (req, res) => {
  const returnTasks = getTasksService(tasks);
  res.json(returnTasks);
});

app.post("/tasks", (req, res) => {
  try {
    const missingFields = validateRequestBody(req.body, [
      "title",
      "description",
    ]);

    if (missingFields.length > 0) {
      res.status(400).json({
        type: "MissingFields",
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

    const { tasks: newTasks, nextTaskId: newNextTaskId } = addTaskService(dto);

    tasks = newTasks;
    nextTaskId = newNextTaskId;

    res.json(tasks);
  } catch (err) {
    res.status(400).json({
      message: err.message,
    });
  }
});

app.delete("/tasks/:id", (req, res) => {
  tasks = deleteTaskService({
    tasks,
    taskId: parseInt(req.params.id),
  });

  res.json(tasks);
});

app.patch("/tasks/done/:id", (req, res) => {
  const { id } = req.params;

  tasks = toggleDoneTaskService(tasks, parseInt(id));

  res.json(tasks);
});

app.patch("/tasks/:id", (req, res) => {
  const { id } = req.params;

  const missingFields = validateRequestBody(req.body, ["title", "description"]);

  if (missingFields.length > 0) {
    res.status(400).json({
      type: "MissingFields",
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

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
