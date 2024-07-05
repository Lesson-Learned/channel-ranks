import { NextFunction, Request, Response } from 'express';
import { CLIENT_FORM_ERROR_ID } from '../errors/client-form-error';

export function errorHandler(
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) {
  console.log('\n', new Date().toLocaleTimeString(), '\n', err);

  if (err?.id === CLIENT_FORM_ERROR_ID) {
    res.status(400).send({ FORM_ERROR: err?.error });
  } else {
    res.sendStatus(500);
  }
}
