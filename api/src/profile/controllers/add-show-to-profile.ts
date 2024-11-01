import { Request, Response } from 'express';
import { convertToDocumentId } from '../../libraries';
import { updateProfileDocument } from '../data-access/update-profile-document';
import { ProfileShow } from '../models';

export async function addShowToProfile(req: Request, res: Response) {
  const showId = convertToDocumentId(req.params.showId);

  const profileShow: ProfileShow = {
    _id: showId,
    status: 'planToWatch'
  };

  await updateProfileDocument(
    req.$uid,
    { $push: { shows: profileShow } }
  );

  res.sendStatus(200);
}
