export function milliToDateString(milli: number): string {
  return new Date(milli).toLocaleDateString(undefined, {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });
}
