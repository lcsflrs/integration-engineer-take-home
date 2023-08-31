const toggleDoneTaskService = require("./toggleDoneTaskService");

describe("toggleDoneTaskService", () => {
  it("should toggle the done status of a task", () => {
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
    };

    const expected = [
      {
        id: 1,
        title: "Test title",
        description: "Test description",
        done: true,
      },
      {
        id: 2,
        title: "Test title",
        description: "Test description",
        done: false,
      },
    ];

    const actual = toggleDoneTaskService(dto);

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

    const actual = toggleDoneTaskService(dto);

    expect(actual).toEqual(expected);
  });
});
