import { Request, Response, NextFunction } from "express";
import { body, validationResult } from "express-validator";

export const validateCreateSample = [
  body("name").notEmpty().withMessage("Name is required").isString(),
  body("code").notEmpty().withMessage("Code is required").isString(),
  (request: Request, response: Response, next: NextFunction) => {
    const errors = validationResult(request);

    if (!errors.isEmpty()) {
        response.status(400).send({ message: errors.array()[0].msg });
    }
    next();
  },
];
