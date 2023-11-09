import { classes } from '@shared';
import css from './button.module.css';

export function Button(props: JSX.IntrinsicElements['button']) {
  return (
    <button
      { ...props }
      className={ classes(css.container, props.className) }
      type={ props.type ?? 'button' }
    />
  );
}
