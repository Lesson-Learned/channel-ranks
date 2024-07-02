import { Request, Response } from 'express';
import {
  getShowBannerPath,
  getShowPosterPath,
  validateOid
} from '../../libraries';
import { readShowDocument, updateShowDocument } from '../../show';
import { validateShowBody } from '../helpers/validate-show-body';

export async function updateShow(req: Request, res: Response) {
  const showId = validateOid(req.params.id).valueOrThrow();
  const showBody = validateShowBody(req.body);

  const show = await readShowDocument(showId);

  await updateShowDocument(show._id, { $set: showBody });

  res.status(200).send({
    paths: {
      banner: getShowBannerPath(showId.toString()),
      poster: getShowPosterPath(showId.toString())
    },
    show: { _id: show._id, ...showBody }
  });
}
