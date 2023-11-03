import { NavLink } from './nav-link';
import css from './navigation.module.css';

export function Navigation() {
  return (
    <nav className={ css.container }>
      <NavLink route="/">
        Movies
      </NavLink>  
      <NavLink route="/">
        TV Shows
      </NavLink>
    </nav>
  );
}
