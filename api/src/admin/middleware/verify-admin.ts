import { NextFunction, Request, Response } from 'express';
import { readProfileDocument } from '../../profile';

export async function verifyAdmin(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const profile = await readProfileDocument({
      query: { _id: req.$uid }
    });

    if (profile.admin) {
      return next();
    }

    throw new Error('Profile is not an admin.');
  } catch {
    res.sendStatus(403);
  }
}
