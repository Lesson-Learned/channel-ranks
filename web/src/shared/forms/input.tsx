import { ChangeEvent } from 'react';
import { classes } from '../utils/classes';
import css from './input.module.css';

type Props = Omit<JSX.IntrinsicElements['input'], 'onChange'> & {
  onChange(value: string): void;
}

export function Input({ onChange, ...props }: Props) {
  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    onChange(event.target.value);
  }

  return (
    <input
      { ...props }
      className={ classes(css.container, props.className) }
      onChange={ handleChange }
    />
  );
}
