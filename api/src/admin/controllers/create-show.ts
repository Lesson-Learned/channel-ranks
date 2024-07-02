import { Request, Response } from 'express';
import { buildShow, createShowDocument } from '../../show';
import { validateShowBody } from '../helpers/validate-show-body';
import { getShowBannerPath, getShowPosterPath } from '../../libraries';

export async function createShow(req: Request, res: Response) {
  const showBody = validateShowBody(req.body);
  const show = buildShow(showBody);

  const showId = await createShowDocument(show);

  res.status(201).send({
    paths: {
      banner: getShowBannerPath(showId.toString()),
      poster: getShowPosterPath(showId.toString())
    },
    show
  });
}
