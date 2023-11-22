import { Show } from '@api';
import { Routes } from '@shared';
import { Link } from 'react-router-dom';
import css from './show-card.module.css';

interface Props {
  show: Show;
}

export function ShowCard({ show }: Props) {
  return (
    <Link className={ css.container } to={ Routes.Show(show._id) }>
      <img alt={ show.name } className={ css.poster } src={ show.poster } />

      <span className={ css.name }>{ show.name }</span>
    </Link>
  );
}
