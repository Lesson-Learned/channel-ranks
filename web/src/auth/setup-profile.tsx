import { createProfile } from '@api';
import {
  Button,
  Error,
  Form,
  Input,
  Label,
  useInput,
  useStatus
} from '@shared';
import { useAuth } from './context/auth-context';
import { getAuthToken } from './utils/get-auth-token';

export function SetupProfile() {
  const { setProfile } = useAuth();
  const name = useInput();
  const status = useStatus();

  function create() {
    if (name.empty()) {
      return name.setError('Please enter a name.');
    }

    status.setLoading();
    (async function() {
      const profile = await createProfile(
        { name: name.clean() },
        await getAuthToken()
      );

      setProfile(profile);
      status.setNone();
    })()
    .catch(e => {
      if (e?.FORM_ERROR) {
        if (e.FORM_ERROR.name) {
          name.setError(e.FORM_ERROR.name);
        }

        status.setNone();
      } else {
        status.setError();
      }
    });
  }

  return (
    <Form onSubmit={ create }>
      <Label htmlFor="Name" />
      <Input
        disabled={ status.loading }
        id="Name"
        onChange={ name.set }
        required
        value={ name.get }
      />

      { name.error && <Error message={ name.error } /> }
      { status.error && <Error message="Something went wrong." /> }

      <Button disabled={ name.empty() || status.loading } type="submit">
        Save
      </Button>
    </Form>
  );
}
