import {
  NextFunction,
  Request,
  RequestHandler,
  Response
} from 'express';

export function asyncHandler(fn: RequestHandler): RequestHandler {
  return function handler(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    Promise.resolve(fn(req, res, next)).catch(next);
  };
}
