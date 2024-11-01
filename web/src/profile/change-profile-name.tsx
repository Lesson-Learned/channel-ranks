import { updateProfileName } from '@api';
import { getAuthToken, useAuth } from '@auth';
import { useStatus } from '@shared';
import { ChangeEvent, useState } from 'react';

export function ChangeProfileName() {
  const [name, setName] = useState('');

  const { setProfileName } = useAuth();
  const status = useStatus();

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setName(event.target.value);
  }

  function save() {
    status.setLoading();

    (async function() {
      const token = await getAuthToken();
      const response = await updateProfileName({ name }, token);

      setProfileName(response.name);

      status.clear();
    })()
    .catch(status.setError);
  }

  return (
    <div>
      <input
        disabled={ status.loading }
        onChange={ handleChange }
        value={ name }
      />

      <button disabled={ status.loading } onClick={ save }>
        Change Name
      </button>

      <pre>{ JSON.stringify(status, null, 2) }</pre>
    </div>
  );
}
