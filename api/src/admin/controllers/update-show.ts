import { Request, Response } from 'express';
import {
  getShowBannerPath,
  getShowPosterPath,
  validateOid
} from '../../libraries';
import { readShowDocument, updateShowDocument } from '../../show';
import { validateShowRequestBody } from '../helpers/validate-show-body';

export async function updateShow(req: Request, res: Response) {
  const showId = validateOid(req.params.id).valueOrThrow();
  const showBody = validateShowRequestBody(req.body);

  const showDocument = await readShowDocument(showId);

  await updateShowDocument(showDocument._id, { $set: showBody });

  res.status(200).send({
    paths: {
      banner: getShowBannerPath(showDocument._id.toString()),
      poster: getShowPosterPath(showDocument._id.toString())
    },
    show: showBody
  });
}
