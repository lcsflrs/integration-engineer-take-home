const validateRequestBody = require("./validateRequestBody");

describe("validateRequestBody", () => {
  it("should return an empty array if all required fields are present", () => {
    const body = {
      title: "Test title",
      description: "Test description",
    };

    const requiredFields = ["title", "description"];

    const expected = [];

    const actual = validateRequestBody(body, requiredFields);

    expect(actual).toEqual(expected);
  });

  it("should return a list of missing fields if not all required fields are present", () => {
    const body = {
      title: "Test title",
    };

    const requiredFields = ["title", "description"];

    const expected = ["description"];

    const actual = validateRequestBody(body, requiredFields);

    expect(actual).toEqual(expected);
  });
});
