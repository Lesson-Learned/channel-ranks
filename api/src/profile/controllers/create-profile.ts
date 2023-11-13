import { Request, Response } from 'express';
import { createProfileDocument } from '../data-access/create-profile';
import { buildProfile } from '../helpers/build-profile';

export async function createProfile(req: Request, res: Response) {
  try {
    const profile = buildProfile(req.$uid);

    await createProfileDocument(profile);

    res.sendStatus(201);
  } catch {
    res.sendStatus(500);
  }
}
