import { Show } from '@api';
import { routes } from '@shared';
import { Link } from 'react-router-dom';
import css from './show-card.module.css';

export function ShowCard({ show }: Props) {
  return (
    <div className={ css.container }>
      <Link to={ routes.show(show._id) }>
        <img alt={ show.name } className={ css.poster } src={ show.poster } />
        <span className={ css.name }>{ show.name }</span>
      </Link>
    </div>
  );
}

type Props = {
  show: Show;
};
