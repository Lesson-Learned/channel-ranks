import { Request, Response } from 'express';
import { createShowDocument } from '../data-access/createShow';
import { buildShow } from '../helpers/buildShow';

export async function createShow(req: Request, res: Response) {
  try {
    const show = buildShow(req.body);

    await createShowDocument(show);

    res.status(200).send(show);
  } catch {
    res.sendStatus(500);
  }
}