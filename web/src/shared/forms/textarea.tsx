import { ChangeEvent } from 'react';
import { classes } from '../utils/classes';
import css from './textarea.module.css';

type Props = Omit<JSX.IntrinsicElements['textarea'], 'onChange'> & {
  onChange(value: string): void;
}

export function TextArea({ onChange, ...props }: Props) {
  function handleChange(event: ChangeEvent<HTMLTextAreaElement>) {
    onChange(event.target.value);
  }

  return (
    <textarea
      { ...props }
      className={ classes(css.container, props.className) }
      onChange={ handleChange }
      rows={ props.rows || 4 }
    />
  );
}
