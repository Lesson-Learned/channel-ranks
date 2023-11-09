import { useDeleteShow } from '../hooks/use-delete-show';
import { Button } from './button';
import css from './delete-show.module.css';

interface Props {
  showId: string;
}

export function DeleteShow({ showId }: Props) {
  const { confirmDelete, loading } = useDeleteShow(showId);

  return (
    <aside className={ css.container }>
      <Button
        className={ css.button }
        disabled={ loading }
        onClick={ confirmDelete }>
        Delete Show
      </Button>
    </aside>
  );
}
