import { ReactNode } from 'react';
import { Content } from './content';
import css from './dashboard.module.css';
import { Header } from './header';
import { Navigation } from './navigation';

interface Props {
  action?: ReactNode;
  children: ReactNode;
  title: string;
}

export function Dashboard({ action, children, title }: Props) {
  return (
    <div className={ css.container }>
      <Header />
      <div className={ css.body }>
        <Navigation />
        <Content action={ action } title={ title }>
          { children }
        </Content>
      </div>
    </div>
  );
}
