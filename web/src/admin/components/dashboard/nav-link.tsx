import { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import css from './nav-link.module.css';

interface Props {
  children: ReactNode;
  route: string;
}

export function NavLink({ children, route }: Props) {
  return (
    <Link className={ css.container } to={ route }>
      { children }
    </Link>
  );
}
