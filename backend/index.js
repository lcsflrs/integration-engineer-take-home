const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const PORT = process.env.PORT || 8000;

app.use(bodyParser.json());

let tasks = [];
let nextTaskId = 1;

app.get("/tasks", (req, res) => {
  res.json(tasks);
});

app.post("/tasks", (req, res) => {
  validateRequestBody(req.body, ["title", "description"]);
  const newTask = {
    id: nextTaskId,
    title: req.body.title,
    description: req.body.description,
  };
  tasks.push(newTask);
  nextTaskId++;
  res.json(newTask);
});

app.delete("/tasks/:id", (req, res) => {});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
