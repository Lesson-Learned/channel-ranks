import { Request, Response } from 'express';
import { convertToDocumentId } from '../../libraries';
import { readShowDocument } from '../data-access/read-show-document';

export async function readShow(req: Request, res: Response) {
  const showId = convertToDocumentId(req.params.showId);

  const showDocument = await readShowDocument(showId);

  res.status(200).send(showDocument);
}
