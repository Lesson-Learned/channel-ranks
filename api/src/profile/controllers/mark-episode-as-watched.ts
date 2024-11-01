import { Request, Response } from 'express';
import { convertToDocumentId } from '../../libraries';
import { updateEpisodeDocuments } from '../../show';
import { updateProfileDocument } from '../data-access/update-profile-document';
import { readProfileShow } from '../helpers/read-profile-show';

export async function markEpisodeAsWatched(req: Request, res: Response) {
  const episodeId = req.params.episodeId;
  const { episodeNumber, showId } = destroyEpisodeId(episodeId);

  const profileShow = await readProfileShow(req.$uid, showId);

  const episodeIds: string[] = [];
  const numberOfEpisodesWatched = profileShow?.numberOfEpisodesWatched ?? 0;

  for (let i = numberOfEpisodesWatched + 1; i <= episodeNumber; i++) {
    episodeIds.push(`${showId}.${i}`);
  }

  await updateEpisodeDocuments(
    { _id: { $in: episodeIds } },
    { $inc: { views: 1 } }
  );

  if (profileShow) {
    await updateProfileDocument(
      req.$uid,
      {
        $set: { 'shows.$[index].numberOfEpisodesWatched': episodeNumber }
      },
      {
        arrayFilters: [{ 'index._id': showId }]
      }
    );
  } else {
    await updateProfileDocument(
      req.$uid,
      {
        $push: {
          shows: {
            _id: showId,
            numberOfEpisodesWatched: episodeNumber,
            status: 'watching'
          }
        }
      }
    );
  }

  res.sendStatus(200);
}

function destroyEpisodeId(episodeId: string) {
  const [showId, episodeNumber] = episodeId.split('.');

  return {
    episodeNumber: Number(episodeNumber),
    showId: convertToDocumentId(showId)
  };
}
