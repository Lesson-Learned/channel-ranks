export function ymdToMilli(ymd: string): number {
  const [year, month, day] = ymd.split('-').map(Number);

  return new Date(year, month - 1, day).valueOf();
}
