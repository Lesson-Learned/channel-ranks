import { Content } from './components/content';
import { Header } from './components/header';
import { Navigation } from './components/navigation';
import css from './dashboard.module.css';

export function Dashboard() {
  return (
    <div className={ css.container }>
      <Header />
      <div className={ css.body }>
        <Navigation />
        <Content title="Dashboard">

        </Content>
      </div>
    </div>
  );
}
