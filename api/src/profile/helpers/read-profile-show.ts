import { aggregate, DocId, PROFILE_COLLECTION } from '../../libraries';
import { Show } from '../../show';
import { ProfileShow } from '../models';

export async function readProfileShow(
  profileId: string,
  showId: DocId<Show>
): Promise<ProfileShow | null> {
  const documents = await aggregate(
    PROFILE_COLLECTION,
    [
      {
        $match: { _id: profileId }
      },
      {
        $unwind: '$shows'
      },
      {
        $match: {
          'shows._id': showId
        }
      }
    ]
  );

  const profileShow = documents[0]?.shows;

  return profileShow ?? null;
}
