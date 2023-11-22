import { Request, Response } from 'express';
import { ObjectId } from 'mongodb';
import { getShowBannerUrl, getShowPosterUrl } from '../../services/cloud';
import { readShowDocuments } from '../data-access/read-shows';

export async function readShow(req: Request, res: Response) {
  try {
    const [show] = await readShowDocuments({
      query: { _id: new ObjectId(req.params.id) }
    });
    const [banner, poster] = await Promise.all([
      getShowBannerUrl(show._id.toString()),
      getShowPosterUrl(show._id.toString())
    ]);

    res.status(200).send({ banner, poster, ...show });
  } catch {
    res.sendStatus(500);
  }
}
