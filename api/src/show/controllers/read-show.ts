import { Request, Response } from 'express';
import { readShowDocuments } from '../data-access/read-shows';

export async function readShow(req: Request, res: Response) {
  try {
    const shows = await readShowDocuments({
      query: { _id: req.params.id }
    });

    res.status(200).send(shows[0]);
  } catch {
    res.sendStatus(500);
  }
}