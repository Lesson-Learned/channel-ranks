import { Request, Response } from 'express';
import { readShowDocuments } from '../data-access/read-show-documents';

export async function searchShows(req: Request, res: Response) {
  const searchQuery = String(req.query.searchQuery);

  const showDocuments = await readShowDocuments(
    { query: { name: {
      $regex: `^${searchQuery}`,
      $options: 'i'
    }}}
  );

  res.status(200).send(showDocuments);
}
 