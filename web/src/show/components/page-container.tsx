import { Show } from '@api';
import { ReactNode } from 'react';
import css from './page-container.module.css';

interface Props {
  children: ReactNode;
  show: Show;
}

export function ShowPageContainer({ children, show }: Props) {
  return (
    <div
      className={ css.container }
      style={{
        backgroundImage:
          `linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.8)),
          url(${ show.banner })`
      }}
    >
      { children }
    </div>
  );
}
