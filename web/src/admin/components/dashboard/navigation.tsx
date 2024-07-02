import { adminRoutes } from '@shared';
import css from './navigation.module.css';
import { NavLink } from './nav-link';

export function Navigation() {
  return (
    <nav className={ css.container }>
      <NavLink route={ adminRoutes.shows }>
        TV Shows
      </NavLink>
    </nav>
  );
}
