import { Request, Response } from 'express';
import { readShowDocuments } from '../data-access/read-shows';
import { getPosterUrls } from '../helpers/get-poster-urls';

export async function readShows(req: Request, res: Response) {
  try {
    const shows = await readShowDocuments();
    const posterUrls = await getPosterUrls(
      shows.map(show => show._id.toString())
    );

    res.status(200).send(
      shows.map((show, i) => ({ ...show, poster: posterUrls[i] }))
    );
  } catch {
    res.sendStatus(500);
  }
}
