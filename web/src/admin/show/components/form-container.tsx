import { ReactNode } from 'react';
import css from './form-container.module.css';

interface Props {
  children: ReactNode;
}

export function FormContainer({ children }: Props) {
  return (
    <main className={ css.container }>
      { children }
    </main>
  );
}
