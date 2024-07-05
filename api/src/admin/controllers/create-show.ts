import { Request, Response } from 'express';
import { buildShow, createShowDocument } from '../../show';
import { validateShowRequestBody } from '../helpers/validate-show-body';
import { getShowBannerPath, getShowPosterPath } from '../../libraries';

export async function createShow(req: Request, res: Response) {
  const showBody = validateShowRequestBody(req.body);
  const show = buildShow(showBody);

  const showDocumentId = await createShowDocument(show);

  res.status(201).send({
    paths: {
      banner: getShowBannerPath(showDocumentId.toString()),
      poster: getShowPosterPath(showDocumentId.toString())
    },
    show
  });
}
