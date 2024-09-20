import { Request, Response } from 'express';
import { createProfileDocument } from '../data-access/create-profile';
import { readProfileDocument } from '../data-access/read-profile';
import { buildProfile } from '../models';

export async function readProfile(req: Request, res: Response) {
  const profileDocument = await readProfileDocument(req.$uid);

  if (profileDocument) {
    res.status(200).send(profileDocument);
  } else {
    const profile = buildProfile(req.$uid);

    await createProfileDocument(profile);

    res.status(200).send(profile);
  }
}
