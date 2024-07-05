import {
  getShowBannerPath,
  getShowPosterPath,
  readUrl,
  WithId
} from '../../libraries';
import { ClientShow, Show } from '../models';

export async function getClientShows(shows: WithId<Show>[]) {
  const clientShows = [ ...shows as ClientShow[] ];
  const promises: Promise<void>[] = [];
    
  for (const clientShow of clientShows) {
    promises.push(
      getShowBannerUrl(clientShow._id.toString())
        .then(url => { clientShow.banner = url; })
        .catch(() => {})
    );

    promises.push(
      getShowPosterUrl(clientShow._id.toString())
        .then(url => { clientShow.poster = url; })
        .catch(() => {})
    );
  }

  await Promise.all(promises);

  return clientShows;
}

function getShowBannerUrl(showId: string): Promise<string> {
  return readUrl(getShowBannerPath(showId));
}

function getShowPosterUrl(showId: string): Promise<string> {
  return readUrl(getShowPosterPath(showId));
}
