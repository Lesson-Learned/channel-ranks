import { Request, Response } from 'express';
import { ObjectId } from 'mongodb';
import { readShowDocuments } from '../data-access/read-shows';

export async function readShow(req: Request, res: Response) {
  try {
    const [show] = await readShowDocuments({
      query: { _id: new ObjectId(req.params.id) }
    });

    res.status(200).send(show);
  } catch {
    res.sendStatus(500);
  }
}
