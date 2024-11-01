import { Request, Response } from 'express';
import { DocId } from '../../libraries';
import { readShowDocuments, Show } from '../../show';
import { readProfileDocument } from '../data-access/read-profile-document';
import { ProfileShow, ProfileShowStatus } from '../models';

export async function readProfileShows(req: Request, res: Response) {
  const profileShowStatus = req.params.showStatus as ProfileShowStatus;
  const start = Number(req.query.start);

  const profileDocument = await readProfileDocument(req.$uid);

  const profileShows = profileDocument.shows.filter(
    (profileShow) => profileShow.status === profileShowStatus
  );

  const profileShowsToReturn = profileShows.slice(
    start,
    start + numberOfDocumentsToSend
  );

  const showDocumentIds: DocId<Show>[] = [];
  const showIdToObjectMap: Record<string, ProfileShow> = {};

  for (const profileShowToReturn of profileShowsToReturn) {
    showDocumentIds.push(profileShowToReturn._id);
    showIdToObjectMap[profileShowToReturn._id.toString()] =
      profileShowToReturn;
  }

  const showDocuments = await readShowDocuments(
    { query: { _id: { $in: showDocumentIds } } }
  );

  const shows = showDocuments.map(
    (showDocument) => ({
      ...showDocument,
      numberOfEpisodesWatched: showIdToObjectMap[
        showDocument._id.toString()
      ].numberOfEpisodesWatched,
      rating: showIdToObjectMap[showDocument._id.toString()].rating
    })
  );

  res.status(200).send({ shows });
}

const numberOfDocumentsToSend = 10;
