import { Show } from '@api';
import css from './show-header.module.css';

export function ShowHeader({ show }: Props) {
  return (
    <header className={ css.container }>
      <h1 className={ css.name }>{ show.name }</h1>

      <p className={ css.description }>{ show.description }</p>
    </header>
  );
}

type Props = {
  show: Show;
};
