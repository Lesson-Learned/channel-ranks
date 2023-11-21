import { FormContainer } from './components/form-container';
import { ShowForm } from './components/show-form';
import { useCreateShow } from './hooks/use-create-show';
import { useShowForm } from './hooks/use-show-form';

export function CreateShow() {
  const form = useShowForm();
  const { handleSubmit, loading } = useCreateShow(form.fields);

  return (
    <FormContainer>
      <ShowForm
        form={ form }
        handleSubmit={ handleSubmit }
        loading={ loading }
      />
    </FormContainer>
  );
}
