import { Request, Response } from 'express';
import { readShowDocuments } from '../data-access/read-shows';

export async function readShows(req: Request, res: Response) {
  try {
    const shows = await readShowDocuments();

    res.status(200).send(shows);
  } catch {
    res.sendStatus(500);
  }
}