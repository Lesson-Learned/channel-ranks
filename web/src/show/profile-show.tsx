import { useProfileShow } from './profile-show.hooks';

export function ProfileShow({ showId }: Props) {
  const data = useProfileShow(showId);

  return (
    <div style={ div }>
      <pre>{ JSON.stringify(data, null, 2) }</pre>

      { data.profileShow ? (
        <button disabled={ data.loading } onClick={ data.removeShow }>
          Remove Show
        </button>
      ) : (
        <button disabled={ data.loading } onClick={ data.addShow }>
          Add Show
        </button>
      )}
    </div>
  );
}

type Props = {
  showId: string;
};

const div = {
  border: '5px solid yellow',
  marginBottom: '10px',
  padding: '10px'
};
