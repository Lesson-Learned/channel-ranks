import { NextFunction, Request, Response } from 'express';
import { readProfileDocument } from '../../profile';

export async function verifyAdmin(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const profile = await readProfileDocument({ _id: req.$uid });

  if (profile.admin) {
    next();
  } else {
    throw 'Profile is not an admin.';
  }
}
