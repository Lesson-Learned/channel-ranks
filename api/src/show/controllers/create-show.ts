import { Request, Response } from 'express';
import { createShowDocument } from '../data-access/create-show';
import { buildShow } from '../models';

export async function createShow(req: Request, res: Response) {
  const show = buildShow(req.body);

  await createShowDocument(show);

  res.status(201).send(show);
}
