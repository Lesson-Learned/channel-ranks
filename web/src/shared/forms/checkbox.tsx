export function Checkbox(props: Omit<JSX.IntrinsicElements['input'], 'type'>) {
  return <input { ...props } type="checkbox" />;
}
