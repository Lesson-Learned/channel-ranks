import { classes } from '@shared';
import { ChangeEvent, HTMLProps } from 'react';
import css from './textarea.module.css';

interface Props extends Omit<HTMLProps<HTMLTextAreaElement>, 'onChange'> {
  onChange(value: string): void;
}

export function TextArea({ onChange, ...textAreaProps }: Props) {
  function handleChange(event: ChangeEvent<HTMLTextAreaElement>) {
    onChange(event.target.value);
  }

  return (
    <textarea
      { ...textAreaProps }
      className={ classes(css.container, textAreaProps.className) }
      onChange={ handleChange }
      rows={ textAreaProps.rows ?? 4 }
    />
  );
}
