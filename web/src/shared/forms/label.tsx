export function Label(props: JSX.IntrinsicElements['label']) {
  return <label { ...props }>{ props.htmlFor }</label>;
}
