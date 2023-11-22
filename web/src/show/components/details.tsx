import { Show } from '@api';
import { milliToDateString } from '@shared';
import css from './details.module.css';

interface Props {
  show: Show;
}

export function ShowDetails({ show }: Props) {
  return (
    <div className={ css.container }>
      <img alt={ show.name } className={ css.poster } src={ show.poster } />

      <div className={ css.details }>
        <div className={ css.detail }>Country: { show.country }</div>
        <div className={ css.detail }>Genre: { show.genre.join(', ') }</div>
        <div className={ css.detail }>Network: { show.network }</div>
        <div className={ css.detail }>
          { milliToDateString(show.releaseDate) }
          { ' - ' }
          { show.endDate ? milliToDateString(show.endDate) : 'Present' }
        </div>
      </div>
    </div>
  );
}
