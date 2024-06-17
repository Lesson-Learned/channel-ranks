import { NextFunction, Request, Response } from 'express';
import { getUid } from '../../libraries';

export function authenticateUser(optional = false) {
  return async function middleware(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const token = req.headers.authorization?.replace('Bearer ', '');

      if (token) {
        const uid = await getUid(token);

        req.$uid = uid;
        next();
      } else {
        throw 'No token provided.';
      }
    } catch (e) {
      if (optional) {
        next();
      } else {
        next(e);
      }
    }
  };
}
