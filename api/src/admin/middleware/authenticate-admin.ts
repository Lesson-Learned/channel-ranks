import { NextFunction, Request, Response } from 'express';
import { readProfileDocument } from '../../profile';

export function authenticateAdmin() {
  return function handler(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    (async function() {
      const profile = await readProfileDocument(req.$uid);

      if (profile.admin) {
        next();
      } else {
        throw 'Profile is not an admin.';
      }
    })()
    .catch(next);
  };
}
