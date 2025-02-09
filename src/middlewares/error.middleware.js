import { HttpException } from "../exceptions/http.exception.js";

/**
 *
 * @param {Error} error
 * @param {Request} request
 * @param {Response} response
 * @param {import("express").NextFunction} nextFunctiuon
 */
export function errorMiddleware(error, request, response, nextFunctiuon) {
  if (error instanceof HttpException) {
    response.status(error.status).json(error.message);
  } else {
    response.status(500).json({
      message: "INTERNAL SERVER ERROR",
    });
  }
}
