import css from './error.module.css';

interface Props {
  message: string;
}

export function Error({ message }: Props) {
  return (
    <div className={ css.container }>
      <span className={ css.message }>{ message }</span>
    </div>
  );
}
