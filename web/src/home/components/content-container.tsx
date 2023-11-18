import { ReactNode } from 'react';
import css from './content-container.module.css';

interface Props {
  children: ReactNode;
}

export function ContentContainer({ children }: Props) {
  return (
    <div className={ css.container }>{ children }</div>
  );
}
