import { Request, Response } from 'express';
import { ObjectId } from 'mongodb';
import { readShowDocument } from '../data-access/read-show';

export async function readShow(req: Request, res: Response) {
  const show = await readShowDocument(new ObjectId(req.params.id));

  res.status(200).send(show);
}
