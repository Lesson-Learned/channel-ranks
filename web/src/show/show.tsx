import { ShowData } from './show.hooks';

export function Show(props: ShowData) {
  return (
    <div style={ div }>
      <pre>{ JSON.stringify(props, null, 2) }</pre>
    </div>
  );
}

const div = {
  border: '5px solid yellow',
  marginBottom: '10px',
  padding: '10px'
};
