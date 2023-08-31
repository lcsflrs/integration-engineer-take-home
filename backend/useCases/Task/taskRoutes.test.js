const request = require("supertest");
const express = require("express");
const taskRoutes = require("./taskRoutes");
const errorHandler = require("../../middleware/errorHandler");

describe("Task Routes", () => {
  const returnApp = () => {
    const app = express();
    app.use(express.json());
    app.use(
      "/tasks",
      taskRoutes(
        [
          {
            id: 1,
            title: "Task 1",
            description: "Description of task 1",
            done: false,
          },
        ],
        1
      )
    );
    app.use(errorHandler);

    return app;
  };
  it("GET /tasks should return the array of tasks", async () => {
    const app = returnApp();

    const response = await request(app).get("/tasks");
    expect(response.status).toBe(200);
    expect(response.body).toEqual([
      {
        id: 1,
        title: "Task 1",
        description: "Description of task 1",
        done: false,
      },
    ]);
  });

  it("POST /tasks should add a new task", async () => {
    const app = returnApp();

    const newTask = {
      title: "New Task",
      description: "Description of the new task",
    };

    const response = await request(app).post("/tasks").send(newTask);

    expect(response.status).toBe(200);
    expect(response.body.length).toBe(2);
  });

  it("POST /tasks should return an error if the request body is missing fields", async () => {
    const app = returnApp();

    const newTask = {
      title: "New Task",
    };

    const response = await request(app).post("/tasks").send(newTask);

    expect(response.status).toBe(400);
    expect(response.body).toEqual({
      type: "missing_fields",
      message: "Missing fields: description",
      missingFields: ["description"],
    });
  });

  it("DELETE /tasks/:id should delete a task", async () => {
    const app = returnApp();

    const response = await request(app).delete("/tasks/1");

    expect(response.status).toBe(200);
    expect(response.body.length).toBe(0);
  });

  it("PATCH /tasks/done/:id should toggle the done property of a task", async () => {
    const app = returnApp();
    const response = await request(app).patch("/tasks/done/1");

    expect(response.status).toBe(200);
    expect(response.body[0].done).toBe(true);
  });

  it("PATCH /tasks/:id should edit a task", async () => {
    const app = returnApp();

    const response = await request(app).patch("/tasks/1").send({
      title: "New title",
      description: "New description",
    });

    expect(response.status).toBe(200);
    expect(response.body[0].title).toBe("New title");
    expect(response.body[0].description).toBe("New description");
  });
});
