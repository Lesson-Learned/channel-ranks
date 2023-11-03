import { Form, Input, Label } from "@components";
import { useState } from 'react';
import css from './add-show.module.css';

export function AddShow() {
  const [form, setForm] = useState({
    description: '',
    name: ''
  });

  function setField(field: keyof typeof form) {
    return (value: string) => {
      setForm(form => ({ ...form, [field]: value }));
    };
  }

  return (
    <Form className={ css.form } onSubmit={ () => {} }>
      <Label className={ css.label } htmlFor="Description" />
      <Input
        className={ css.input }
        id="Description"
        onChange={ setField('description') }
        required
        value={ form.description }
      />

      <Label className={ css.label } htmlFor="Name" />
      <Input
        id="Name"
        onChange={ setField('name') }
        required
        value={ form.name }
      />
    </Form>
  );
}
