export function classes(...classNames: unknown[]): string {
  return classNames.filter(Boolean).join(' ');
}
