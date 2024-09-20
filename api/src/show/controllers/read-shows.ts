import { Request, Response } from 'express';
import { countShowDocuments } from '../data-access/count-show-documents';
import { readShowDocuments } from '../data-access/read-shows';
import { getClientShows } from '../helpers/get-client-shows';

export async function readShows(req: Request, res: Response) {
  const numberOfShowDocuments = await countShowDocuments(req.query);
  const showDocuments = await readShowDocuments({ query: req.query });
  const clientShows = await getClientShows(showDocuments);

  res.status(200).send({
    numberOfShows: numberOfShowDocuments,
    shows: clientShows
  });
}
