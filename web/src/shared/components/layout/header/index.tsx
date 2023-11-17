import { Link } from 'react-router-dom';
import { Routes } from '../../../routes';
import { AccountMenu } from './account-menu';
import css from './index.module.css';

export function LayoutHeader() {
  return (
    <header className={ css.container }>
      <h1 className={ css.logo }>
        <span>Channel</span>
        <span className={ css.logoRanks }>Ranks</span>
      </h1>

      <nav className={ css.links }>
        <Link className={ css.link } to="/">Home</Link>
        <Link className={ css.link } to={ Routes.Shows }>Shows</Link>
      </nav>

      <AccountMenu />
    </header>
  );
}
