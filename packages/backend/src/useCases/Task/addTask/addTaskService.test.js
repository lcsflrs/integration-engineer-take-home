const addTaskService = require("./addTaskService");

describe("addTaskService", () => {
  it("should add a new task to the list of tasks and update the next task ID", () => {
    const dto = {
      nextTaskId: 1,
      body: {
        title: "Test title",
        description: "Test description",
      },
      tasks: [],
    };

    const expected = {
      tasks: [
        {
          id: 1,
          title: "Test title",
          description: "Test description",
          done: false,
        },
      ],
      nextTaskId: 2,
    };

    const actual = addTaskService(dto);

    expect(actual).toEqual(expected);
  });
});
