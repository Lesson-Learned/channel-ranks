import { LayoutHeader } from '@shared';
import css from './intro.module.css';

export function Intro() {
  return (
    <div className={ css.container }>
      <LayoutHeader />

      <h2 className={ css.text }>
        Track all the tv shows and movies you've watched, are watching and
        plan to watch.
      </h2>
    </div>
  );
}
