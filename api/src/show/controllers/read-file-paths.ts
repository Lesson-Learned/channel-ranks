import { Request, Response } from 'express';
import { getShowBannerPath, getShowPosterPath } from '../../services';

export async function readFilePaths(req: Request, res: Response) {
  try {
    const paths = {
      banner: getShowBannerPath(req.params.id),
      poster: getShowPosterPath(req.params.id)
    };

    res.status(200).send(paths);
  } catch {
    res.sendStatus(500);
  }
}
