import css from './button.module.css';

export function Button(props: JSX.IntrinsicElements['button']) {
  return (
    <button
      { ...props }
      className={ css.button }
      type={ props.type ?? 'button' }
    />
  );
}
