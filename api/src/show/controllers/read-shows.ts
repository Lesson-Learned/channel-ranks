import { Request, Response } from 'express';
import { readShowDocuments } from '../data-access/read-shows';
import { getClientShows } from '../helpers/get-client-shows';

export async function readShows(req: Request, res: Response) {
  const shows = await readShowDocuments();
  const clientShows = await getClientShows(shows);

  res.status(200).send(clientShows);
}
