import { AdminRoutes } from '@shared';
import css from './navigation.module.css';
import { NavLink } from './nav-link';

export function Navigation() {
  return (
    <nav className={ css.container }>
      <NavLink route={ AdminRoutes.Shows }>
        TV Shows
      </NavLink>
    </nav>
  );
}
