import { Show } from '@api';
import { FormContainer } from './components/form-container';
import { ShowForm } from './components/show-form';
import { useShowForm } from './hooks/use-show-form';
import { useUpdateShow } from './hooks/use-update-show';
import { showToForm } from './utils/show-to-form';

interface Props {
  show: Show;
}

export function UpdateShow({ show }: Props) {
  const form = useShowForm(showToForm(show));
  const { handleSubmit, loading } = useUpdateShow(show._id, form.fields);

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
