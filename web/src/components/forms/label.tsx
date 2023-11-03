import { HTMLProps } from 'react';

export function Label(props: HTMLProps<HTMLLabelElement>) {
  return <label { ...props }>{ props.htmlFor }</label>;
}
