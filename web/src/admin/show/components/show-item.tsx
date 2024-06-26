import { Show } from '@api';
import { adminRoutes } from '@shared';
import { Link } from 'react-router-dom';
import css from './show-item.module.css';

interface Props {
  show: Show;
}

export function ShowItem({ show }: Props) {
  return (
    <Link className={ css.container } to={ adminRoutes.show(show._id) }>
      { show.name }
    </Link>
  );
}
