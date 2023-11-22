import { Request, Response } from 'express';
import { getShowPosterUrl } from '../../services/cloud';
import { readShowDocuments } from '../data-access/read-shows';

export async function readShows(req: Request, res: Response) {
  try {
    const shows = await readShowDocuments();
    const posterUrls = await Promise.all(
      shows.map(show => getShowPosterUrl(show._id.toString()))
    );

    res.status(200).send(
      shows.map((show, i) => ({ poster: posterUrls[i], ...show }))
    );
  } catch {
    res.sendStatus(500);
  }
}
