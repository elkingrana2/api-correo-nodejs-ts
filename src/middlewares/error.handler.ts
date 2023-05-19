import { Boom } from "@hapi/boom";
import { ErrorRequestHandler, NextFunction, Request, Response } from "express";
import ValidationError from "mongoose";

export const logErrors: ErrorRequestHandler = (err, req, res, next) => {
  console.log("logErrors");
  console.error(err);
  next(err);
};

export const errorHandler: ErrorRequestHandler = (err: Error, req, res, next) => {
  console.log("errorHandler");
  res.status(500).json({
    message: err.message,
    stack: err.stack,
  });
};

export const boomErrorHandler: ErrorRequestHandler = (err: Boom, req, res, next) => {
  if (err.isBoom) {
    const { output } = err;
    res.status(output.statusCode).json(output.payload);
  } else {
    next(err);
  }
};

export const validationError: ErrorRequestHandler = (err: any, req, res, next) => {
  if (err instanceof ValidationError.Error.ValidationError) {
    const errores = Object.values(err.errors).map((error) => error.message);
    return res.status(400).json({ error: "Error de validación", errores });
  } else {
    next(err);
  }
};
