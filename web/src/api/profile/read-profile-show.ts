import { ProfileShow, PROFILE_URL } from '../profile/profile';
import { AuthToken } from '../types';

export async function readProfileShow(
  showId: string,
  token: AuthToken
): Promise<ReadProfileShowResponse> {
  const response = await fetch(
    new URL(`${PROFILE_URL}/shows/${showId}`),
    {
      headers: { ...token }
    }
  );

  if (response.status === 200) {
    return (await response.json());
  }

  throw new Error('Failed to read profile show.');
}

type ReadProfileShowResponse = {
  profileShow: ProfileShow | null;
};
