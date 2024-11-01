import { Request, Response } from 'express';
import { readEpisodeDocument } from '../data-access/read-episode-document';

export async function readEpisode(req: Request, res: Response) {
  const episodeId = req.params.episodeId;

  const episodeDocument = await readEpisodeDocument(episodeId);

  res.status(200).send(episodeDocument);
}
