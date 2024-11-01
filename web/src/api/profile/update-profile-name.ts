import { AuthToken } from '../types';
import { PROFILE_URL } from './profile';

export async function updateProfileName(
  body: UpdateProfileNameRequestBody,
  token: AuthToken
): Promise<UpdateProfileNameResponse> {
  const response = await fetch(
    new URL(`${PROFILE_URL}/name`),
    {
      body: JSON.stringify(body),
      headers: { ...token },
      method: 'PATCH'
    }
  );

  if (response.status === 200) {
    return (await response.json());
  }

  throw new Error('Failed to update profile name.');
}

type UpdateProfileNameRequestBody = {
  name: string;
};

type UpdateProfileNameResponse = {
  name: string;
};
