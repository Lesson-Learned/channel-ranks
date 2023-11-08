import { ReactNode } from 'react';
import css from './content.module.css';

interface Props {
  action?: ReactNode;
  children: ReactNode;
  title: string;
}

export function Content({ action, children, title }: Props) {
  return (
    <main className={ css.container }>
      <header className={ css.header }>
        <h2>{ title }</h2>
        { action }
      </header>

      { children }
    </main>
  );
}
