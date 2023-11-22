import css from './index.module.css';
import { Navigation } from './navigation';

export function LayoutHeader() {
  return (
    <header className={ css.container }>
      <h1 className={ css.logo }>
        <span>Channel</span>
        <span className={ css.logoRanks }>Ranks</span>
      </h1>

      <Navigation />
    </header>
  );
}
