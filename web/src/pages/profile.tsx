import { useAuth } from '@auth';
import {
  ChangeProfileName,
  ChangeProfilePicture,
  Profile,
  // ProfileShows
} from '@profile';

export function ProfilePage() {
  const { profile } = useAuth();

  if (profile) {
    return (
      <div>
        <ChangeProfilePicture profile={ profile } />
        <ChangeProfileName />
        <Profile profile={ profile } />
        {/* <ProfileShows profileId={ profile._id } /> */}
      </div>
    );
  }

  return <div>Page not found.</div>;
}
