import { ITask } from "./@types";

const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const cors = require("cors");

const errorHandler = require("./middleware/errorHandler");

const PORT = process.env.PORT || 8000;

app.use(
  cors({
    origin: "*",
  })
);
app.use(bodyParser.json());

const taskRoutes = require("./useCases/Task/taskRoutes");

let tasks: ITask[] = [];
let nextTaskId = 1;

app.use("/tasks", taskRoutes(tasks, nextTaskId));
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
