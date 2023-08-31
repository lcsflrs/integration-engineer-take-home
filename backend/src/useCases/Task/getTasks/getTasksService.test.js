const getTasksService = require("./getTasksService");

describe("getTasksService", () => {
  it("should return the same list of tasks", () => {
    const dto = [
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

    const actual = getTasksService(dto);

    expect(actual).toEqual(expected);
  });
});
