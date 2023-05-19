import boom from "@hapi/boom";
import { NextFunction, Request, Response } from "express";
import Joi from "joi";
import { ErrorRequestHandler } from "express";
import mongoose from "mongoose";

type ValidatorHandler = (schema: Joi.ObjectSchema, property: string) => (req: Request & { [key: string]: any }, res: Response, next: NextFunction) => void;

export const validatorHandler: ValidatorHandler = (schema, property) => {
  return (req, res, next) => {
    const data = req[property];
    const { error } = schema.validate(data, { abortEarly: false });
    if (error) {
      next(boom.badRequest(error));
    }
    next();
  };
};

// capturar errores de validatorError

interface ValidationErrorMessage {
  message: string;
}

export const validationErrorMiddleware: ErrorRequestHandler = (err: mongoose.Error.ValidationError, req, res, next) => {
  if (err instanceof mongoose.Error.ValidationError) {
    const errores = Object.values(err.errors).map((error) => error.message);
    return res.status(400).json({ error: "Error de validación", errores });
  }

  // Otros errores
  return next(err);
};
