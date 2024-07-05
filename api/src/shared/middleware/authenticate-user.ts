import { NextFunction, Request, RequestHandler, Response } from 'express';
import { getUid } from '../../libraries';

export function authenticateUser(
  isAuthenticationOptional = false
): RequestHandler {
  return function handler(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    (async function() {
      const token = req.headers.authorization?.replace('Bearer ', '');
    
      if (token) {
        req.$uid = await getUid(token);
        next();
      } else {
        throw new Error('No token provided.');
      }
    })()
    .catch(e => isAuthenticationOptional ? next() : next(e));
  };
}
