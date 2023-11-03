import { ReactNode } from 'react';
import css from './content.module.css';

interface Props {
  children: ReactNode;
  title: string;
}

export function Content({ children, title }: Props) {
  return (
    <main className={ css.container }>
      <h2 className={ css.title }>{ title }</h2>

      { children }
    </main>
  );
}
