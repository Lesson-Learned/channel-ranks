import css from './stat-card.module.css';

interface Props {
  count: number;
  title: string;
}

export function StatCard({ count, title }: Props) {
  return (
    <div className={ css.container }>
      <h3>{ title }</h3>

      { count }
    </div>
  );
}
