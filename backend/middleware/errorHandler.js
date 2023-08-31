const errorHandler = (err, req, res, next) => {
  console.log("Veio para o error handler");

  if (err.type === "missing_fields") {
    res.status(400).json({
      type: err.type,
      message: err.message,
      missingFields: err.missingFields,
    });

    return;
  }

  res.status(500).json({
    type: "InternalServerError",
    message: err.message,
  });
};

module.exports = errorHandler;
