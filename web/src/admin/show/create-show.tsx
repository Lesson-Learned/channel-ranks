import css from './create-show.module.css';
import { ShowForm } from './components/show-form';
import { useCreateShow } from './hooks/use-create-show';
import { useShowForm } from './hooks/use-show-form';

export function CreateShow() {
  const showFormMap = useShowForm();
  const { handleSubmit, loading } = useCreateShow(showFormMap.form);

  return (
    <main className={ css.container }>
      <ShowForm
        handleSubmit={ handleSubmit }
        loading={ loading }
        showFormMap={ showFormMap }
      />
    </main>
  );
}
