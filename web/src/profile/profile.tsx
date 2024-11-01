import { Profile as ProfileModel } from '@api';

export function Profile({ profile }: Props) {
  return (
    <div>
      <pre>{ JSON.stringify(profile, null, 2) }</pre>
    </div>
  );
}

type Props = {
  profile: ProfileModel;
};
