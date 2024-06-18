import { Request, Response } from 'express';
import { buildShow, createShowDocument } from '../../show';

export async function createShow(req: Request, res: Response) {
  const show = buildShow(req.body);

  await createShowDocument(show);

  res.status(201).send(show);
}
