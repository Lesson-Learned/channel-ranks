import { ReactNode } from 'react';
import { Content } from './components/content';
import { Header } from './components/header';
import { Navigation } from './components/navigation';
import css from './dashboard.module.css';

interface Props {
  children: ReactNode;
  title: string;
}

export function Dashboard({ children, title }: Props) {
  return (
    <div className={ css.container }>
      <Header />
      <div className={ css.body }>
        <Navigation />
        <Content title={ title }>
          { children }
        </Content>
      </div>
    </div>
  );
}
