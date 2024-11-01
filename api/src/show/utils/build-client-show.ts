import { getShowPosterPath, readFileUrl, WithId } from '../../libraries';
import { ClientShow, Show } from '../models';

export async function buildClientShow(
  showDocument: WithId<Show>,
  include?: Include
): Promise<ClientShow> {
  const clientShow: ClientShow = { ...showDocument };

  if (include?.poster) {
    clientShow.poster = await readFileUrl(
      getShowPosterPath(showDocument._id.toString())
    )
    .catch(() => undefined);
  }

  return clientShow;
}

type Include = {
  poster?: boolean;
};
