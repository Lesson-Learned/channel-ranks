import { FormEvent, HTMLProps } from 'react';

interface Props extends Omit<HTMLProps<HTMLFormElement>, 'onSubmit'> {
  onSubmit(): void;
}

export function Form({ onSubmit, ...formProps }: Props) {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    onSubmit();
  }

  return (
    <form { ...formProps } autoComplete="off" onSubmit={ handleSubmit } />
  );
}
