import { Request, Response } from 'express';
import { ObjectId } from 'mongodb';
import { updateShowDocument } from '../data-access/update-show';

export async function updateShow(req: Request, res: Response) {
  try {
    const updates = req.body;

    await updateShowDocument(
      new ObjectId(req.params.id),
      { $set: updates }
    );

    res.status(200).send(updates);
  } catch {
    res.sendStatus(500);
  }
}