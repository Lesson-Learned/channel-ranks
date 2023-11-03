export function classes(...classNames: unknown[]): string {
  const valid = classNames.filter(cn => typeof cn === 'string' && cn.length);

  return valid.length ? valid.join(' ') : '';
}
