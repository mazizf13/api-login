import { NextFunction, Request, Response } from "express";
import { HttpException } from "../exceptions/root";

export const errorMiddleware = (
  error: HttpException,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  console.log("Hmm Error!", error);
  res.status(error.statusCode).json({
    message: error.message,
    ErrorCode: error.errorCode,
    errors: error.errors,
  });
};
