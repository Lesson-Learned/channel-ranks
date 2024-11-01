import { Request, Response } from 'express';
import { createProfileDocument } from '../data-access/create-profile-document';
import { readProfileDocuments } from '../data-access/read-profile-documents';
import { buildClientProfile } from '../utils/build-client-profile';
import { buildProfile } from '../utils/build-profile';

export async function createOrReadProfile(req: Request, res: Response) {
  const profileDocuments = await readProfileDocuments(
    { query: { _id: req.$uid } }
  );

  if (profileDocuments.length > 0) {
    const clientProfile = await buildClientProfile(
      profileDocuments[0],
      { photo: true }
    );

    res.status(200).send(clientProfile);
  } else {
    const profile = buildProfile(req.$uid);

    await createProfileDocument(profile);

    const clientProfile = await buildClientProfile(profile);

    res.status(201).send(clientProfile);
  }
}
