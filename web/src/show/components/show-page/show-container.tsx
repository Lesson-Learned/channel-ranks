import { Show } from '@api';
import css from './show-container.module.css';

export function ShowPageContainer({ children, show }: Props) {
  return (
    <div
      className={ css.container }
      style={{
        backgroundImage:
          `linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.8)),
          url(${ show.banner })`
      }}>
      { children }
    </div>
  );
}

type Props = {
  children: JSX.IntrinsicElements['div']['children'];
  show: Show;
};
