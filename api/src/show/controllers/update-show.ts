import { Request, Response } from 'express';
import { ObjectId } from 'mongodb';
import { updateShowDocument } from '../data-access/update-show';

export async function updateShow(req: Request, res: Response) {
  const updates = req.body;

  await updateShowDocument(
    new ObjectId(req.params.id),
    { $set: updates }
  );

  res.status(200).send(updates);
}
