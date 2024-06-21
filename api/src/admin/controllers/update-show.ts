import { Request, Response } from 'express';
import { validateOid } from '../../libraries';
import { readShowDocument, updateShowDocument } from '../../show';
import { validateShowBody } from '../helpers/validate-show-body';

export async function updateShow(req: Request, res: Response) {
  const showId = validateOid(req.params.id).valueOrThrow();
  const showBody = validateShowBody(req.body);

  const show = await readShowDocument(showId);

  await updateShowDocument(show._id, { $set: showBody });

  res.status(200).send(showBody);
}
