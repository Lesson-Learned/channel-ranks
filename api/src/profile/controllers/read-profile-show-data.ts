import { Request, Response } from 'express';
import { convertToDocumentId } from '../../libraries';
import { readProfileShow } from '../helpers/read-profile-show';

export async function readProfileShowData(req: Request, res: Response) {
  const showId = convertToDocumentId(req.params.showId);

  const profileShow = await readProfileShow(req.$uid, showId);

  res.status(200).send({ profileShow });
}
