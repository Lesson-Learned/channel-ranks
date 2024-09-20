import { Link } from 'react-router-dom';
import { routes } from '../../routes';
import { AccountMenu } from './account-menu';
import css from './main-header.module.css';

export function MainHeader() {
  return (
    <header className={ css.container }>
      <Link className={ css.logo } to="/">
        <span>Channel</span>
        <span className={ css.logoRanks }>Ranks</span>
      </Link>

      <nav className={ css.nav }>
        <Link className={ css.link } to={ routes.shows }>Shows</Link>
        <AccountMenu />
      </nav>
    </header>
  );
}
