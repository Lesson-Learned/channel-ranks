import { FormEvent } from 'react';

type Props = Omit<JSX.IntrinsicElements['form'], 'onSubmit'> & {
  onSubmit(): void;
}

export function Form({ onSubmit, ...props }: Props) {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    onSubmit();
  }

  return (
    <form
      { ...props }
      autoComplete={ props.autoComplete || 'off' }
      onSubmit={ handleSubmit }
    />
  );
}
