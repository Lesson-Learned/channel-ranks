import css from './page-container.module.css';

export function PageContainer(props: JSX.IntrinsicElements['div']) {
  return <div { ...props } className={ css.container } />;
}
