import { NextFunction, Request, Response } from 'express';
import { FORM_ERROR_ID } from '../errors/constants';

export function errorHandler(
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) {
  console.log('\n', new Date().toLocaleTimeString(), '\n', err);

  if (err?.id === FORM_ERROR_ID) {
    res.status(400).send({ FORM_ERROR: err?.error });
  } else {
    res.sendStatus(500);
  }
}
