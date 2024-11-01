import { Profile } from '@api';
import { useAuth } from '@auth';
import { getProfilePhotoPath, uploadFile } from '@libraries';
import { useStatus } from '@shared';
import { ChangeEvent, useState } from 'react';

export function ChangeProfilePicture({ profile }: Props) {
  const [file, setFile] = useState<File>();
  const [photoUrl, setPhotoUrl] = useState('');

  const { setProfilePhoto } = useAuth();
  const status = useStatus();

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.item(0);

    if (file) {
      setFile(file);
      setPhotoUrl(url => {
        URL.revokeObjectURL(url);

        return URL.createObjectURL(file);
      });
    }
  }

  function save() {
    if (file) {
      status.setLoading();

      (async function() {
        await uploadFile(file, getProfilePhotoPath(profile._id));
        setProfilePhoto(photoUrl);
        status.clear();
      })()
      .catch(status.setError);
    }
  }

  return (
    <div>
      <input
        disabled={ status.loading }
        onChange={ handleChange }
        type="file"
      />

      <button disabled={ status.loading } onClick={ save }>
        Change Profile Picture
      </button>

      <img src={ photoUrl } />

      <pre>{ JSON.stringify(status, null, 2) }</pre>
    </div>
  );
}

type Props = {
  profile: Profile;
};
