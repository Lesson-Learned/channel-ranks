import { Request, Response } from 'express';
import { convertToDocumentId } from '../../libraries';
import { updateProfileDocument } from '../data-access/update-profile-document';

export async function removeShowFromProfile(req: Request, res: Response) {
  const showId = convertToDocumentId(req.params.showId);

  await updateProfileDocument(
    req.$uid,
    {
      $pull: {
        shows: { _id: showId }
      }
    }
  );

  res.sendStatus(200);
}
