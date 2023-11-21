import { Request, Response } from 'express';
import { createShowDocument } from '../data-access/create-show';
import { buildShow } from '../helpers/build-show';

export async function createShow(req: Request, res: Response) {
  try {
    const show = buildShow(req.body);

    await createShowDocument(show);

    res.status(201).send(show);
  } catch {
    res.sendStatus(500);
  }
}
