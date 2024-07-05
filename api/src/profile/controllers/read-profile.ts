import { Request, Response } from 'express';
import { readProfileDocument } from '../data-access/read-profile';

export async function readProfile(req: Request, res: Response) {
  const profileDocument = await readProfileDocument(req.$uid);

  res.status(200).send(profileDocument);
}
