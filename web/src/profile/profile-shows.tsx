import { useProfileShows } from './profile.shows.hooks';

export function ProfileShows() {
  const data = useProfileShows();

  return (
    <div>
      <pre>{ JSON.stringify(data, null, 2) }</pre>
    </div>
  );
}
