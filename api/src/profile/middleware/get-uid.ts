import { NextFunction, Request, Response } from 'express';
import admin from '../../config';
import { hash } from '../../utils';

export async function getUid(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const token = req.headers.authorization?.replace('Bearer ', '');

    if (!token) {
      throw new Error('No token provided.');
    }

    const decoded = await admin.auth().verifyIdToken(token);

    req.$uid = hash(decoded.uid);
    next();
  } catch {
    res.sendStatus(401);
  }
}
