import { Request, Response } from 'express';
import { validateOid } from '../../libraries';
import { readShowDocument } from '../data-access/read-show';
import { getClientShows } from '../helpers/get-client-shows';

export async function readShow(req: Request, res: Response) {
  const showId = validateOid(req.params.id).valueOrThrow();

  const showDocument = await readShowDocument(showId);
  const [clientShow] = await getClientShows([showDocument]);

  res.status(200).send(clientShow);
}
