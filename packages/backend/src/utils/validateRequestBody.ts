const validateRequestBody = (body: any, requiredFields: string[]) => {
  const missingFields = [];
  for (const field of requiredFields) {
    if (
      !(field in body) ||
      body[field] === "" ||
      typeof body[field] !== "string"
    ) {
      missingFields.push(field);
    }
  }
  return missingFields;
};

module.exports = validateRequestBody;
