const deleteTaskService = require("./deleteTaskService");

describe("deleteTaskService", () => {
  it("should delete a task from the list of tasks", () => {
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
        id: 2,
        title: "Test title",
        description: "Test description",
        done: false,
      },
    ];

    const actual = deleteTaskService(dto);

    expect(actual).toEqual(expected);
  });
});
