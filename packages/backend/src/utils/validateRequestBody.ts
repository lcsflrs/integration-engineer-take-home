const validateRequestBody = (body: any, requiredFields: string[]) => {
  const missingFields = [];
  for (const field of requiredFields) {
    if (!(field in body)) {
      missingFields.push(field);
    }
  }
  return missingFields;
};

module.exports = validateRequestBody;
