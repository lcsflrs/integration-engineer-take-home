import { NextFunction, Request, Response } from "express";

const errorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
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
