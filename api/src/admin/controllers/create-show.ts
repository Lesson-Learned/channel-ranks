import { Request, Response } from 'express';
import { buildShow, createShowDocument } from '../../show';
import { validateShowBody } from '../helpers/validate-show-body';

export async function createShow(req: Request, res: Response) {
  const showBody = validateShowBody(req.body);
  const show = buildShow(showBody);

  await createShowDocument(show);

  res.status(201).send(show);
}
