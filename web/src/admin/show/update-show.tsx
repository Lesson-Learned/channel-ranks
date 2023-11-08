import { Show } from '@api';
import { ShowForm } from './components/show-form';
import { useShowForm } from './hooks/use-show-form';
import { useUpdateShow } from './hooks/use-update-show';
import { showToForm } from './utils/show-to-form';

interface Props {
  show: Show;
}

export function UpdateShow({ show }: Props) {
  const showFormMap = useShowForm(showToForm(show));
  const { handleSubmit, loading } = useUpdateShow(show._id, showFormMap.form);

  return (
    <ShowForm
      handleSubmit={ handleSubmit }
      loading={ loading }
      showFormMap={ showFormMap }
    />
  );
}
