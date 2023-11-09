import { FormContainer } from './components/form-container';
import { ShowForm } from './components/show-form';
import { useCreateShow } from './hooks/use-create-show';
import { useShowForm } from './hooks/use-show-form';

export function CreateShow() {
  const showFormMap = useShowForm();
  const { handleSubmit, loading } = useCreateShow(showFormMap.form);

  return (
    <FormContainer>
      <ShowForm
        handleSubmit={ handleSubmit }
        loading={ loading }
        showFormMap={ showFormMap }
      />
    </FormContainer>
  );
}
