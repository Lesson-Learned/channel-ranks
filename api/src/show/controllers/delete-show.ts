import { Request, Response } from 'express';
import { ObjectId } from 'mongodb';
import { deleteShowDocument } from '../data-access/delete-show';

export async function deleteShow(req: Request, res: Response) {
  await deleteShowDocument(new ObjectId(req.params.id));

  res.sendStatus(204);
}
