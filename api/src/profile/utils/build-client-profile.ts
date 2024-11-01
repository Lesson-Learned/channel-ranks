import { getProfilePhotoPath, readFileUrl } from '../../libraries';
import { ClientProfile, Profile } from '../models';

export async function buildClientProfile(
  profile: Profile,
  include?: Include
): Promise<ClientProfile> {
  const clientProfile: ClientProfile = {
    _id: String(profile.publicId),
    name: profile.name
  };

  if (include?.photo) {
    clientProfile.photo = await readFileUrl(
      getProfilePhotoPath(profile.publicId)
    )
    .catch(() => undefined);
  }

  return clientProfile;
}

type Include = {
  photo?: boolean;
};
