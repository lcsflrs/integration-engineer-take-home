/**
 * Validates if all required fields are present in the request body.
 * @param {Object} body - The request body to be validated.
 * @param {string[]} requiredFields - List of required fields.
 * @returns {string[]} List of missing fields in the request body.
 */
const validateRequestBody = (body, requiredFields) => {
  const missingFields = [];
  for (const field of requiredFields) {
    if (!(field in body)) {
      missingFields.push(field);
    }
  }
  return missingFields;
};

module.exports = validateRequestBody;
