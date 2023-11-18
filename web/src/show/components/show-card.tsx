import { Show } from '@api';
import poster from '@assets/poster-3.jpg';
import { Link } from 'react-router-dom';
import css from './show-card.module.css';

interface Props {
  show: Show;
}

export function ShowCard({ show }: Props) {
  return (
    <Link className={ css.container } to="/">
      <img alt={ show.name } className={ css.poster } src={ poster } />

      <span className={ css.name }>{ show.name }</span>
    </Link>
  );
}
