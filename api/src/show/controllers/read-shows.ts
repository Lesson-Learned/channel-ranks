import { Request, Response } from 'express';
import { readShowDocuments } from '../data-access/read-shows';
import { getClientShows } from '../helpers/get-client-shows';

export async function readShows(req: Request, res: Response) {
  const showDocuments = await readShowDocuments();
  const clientShows = await getClientShows(showDocuments);

  res.status(200).send(clientShows);
}
