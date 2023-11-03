import { FormEvent, HTMLProps } from 'react';

interface Props extends Omit<HTMLProps<HTMLFormElement>, 'onSubmit'> {
  onSubmit(): void;
}

export function Form(props: Props) {
  const { onSubmit, ...formProps } = props;

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    onSubmit();
  }

  return (
    <form { ...formProps } autoComplete="off" onSubmit={ handleSubmit } />
  );
}
