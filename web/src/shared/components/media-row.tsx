import { ReactNode } from 'react';
import css from './media-row.module.css';

interface Props {
  children: ReactNode;
  title: string;
}

export function MediaRow({ children, title }: Props) {
  return (
    <div className={ css.container }>
      <h3 className={ css.title }>{ title }</h3>

      <div className={ css.grid }>{ children }</div>
    </div>
  );
}
