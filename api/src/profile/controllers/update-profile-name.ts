import { Request, Response } from 'express';
import { updateProfileDocument } from '../data-access/update-profile-document';

export async function updateProfileName(req: Request, res: Response) {
  const profileName = req.body.name;

  await updateProfileDocument(
    req.$uid,
    { $set: { name: profileName } }
  );

  res.status(200).send({ name: profileName });
}
