import { Request, Response } from 'express';
import { SHOW_COLLECTION } from '../../config';
import { readStat } from '../helpers/read-stat';

export async function readStats(req: Request, res: Response) {
  try {
    const stats = await Promise.all([
      readStat(SHOW_COLLECTION, 'showCount')
    ]);

    res.status(200).send(Object.assign({}, ...stats));
  } catch {
    res.sendStatus(500);
  }
}
