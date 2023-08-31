const editTaskService = require("./editTaskService");

describe("editTaskService", () => {
  it("should edit a task from the list of tasks", () => {
    const dto = {
      tasks: [
        {
          id: 1,
          title: "Test title",
          description: "Test description",
          done: false,
        },
        {
          id: 2,
          title: "Test title",
          description: "Test description",
          done: false,
        },
      ],
      taskId: 1,
      body: {
        title: "New title",
        description: "New description",
      },
    };

    const expected = [
      {
        id: 1,
        title: "New title",
        description: "New description",
        done: false,
      },
      {
        id: 2,
        title: "Test title",
        description: "Test description",
        done: false,
      },
    ];

    const actual = editTaskService(dto);

    expect(actual).toEqual(expected);
  });

  it("should return the same list of tasks if the task ID is not found", () => {
    const dto = {
      tasks: [
        {
          id: 1,
          title: "Test title",
          description: "Test description",
          done: false,
        },
        {
          id: 2,
          title: "Test title",
          description: "Test description",
          done: false,
        },
      ],
      taskId: 3,
      body: {
        title: "New title",
        description: "New description",
      },
    };

    const expected = [
      {
        id: 1,
        title: "Test title",
        description: "Test description",
        done: false,
      },
      {
        id: 2,
        title: "Test title",
        description: "Test description",
        done: false,
      },
    ];

    const actual = editTaskService(dto);

    expect(actual).toEqual(expected);
  });
});
