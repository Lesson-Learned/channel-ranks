import { StatCard } from './components/stat-card';
import { useStats } from './hooks/use-stats';

export function ReadStats() {
  const stats = useStats();

  if (stats.loading) {
    return <div>Loading Stats.</div>;
  }

  if (!stats.stats) {
    return <div>Failed to load stats.</div>;
  }

  return (
    <section>
      <StatCard count={ stats.stats.showCount } title="TV Shows" />
    </section>
  );
}
