import { Genre } from '@api';
import { Checkbox, Label } from '@components';
import css from './genre-checkbox.module.css';

interface Props {
  checked: boolean;
  genre: Genre;
  onChange(genre: Genre, checked: boolean): void;
}

export function GenreCheckbox({ checked, genre, onChange }: Props) {
  return (
    <div>
      <Label className={ css.label } htmlFor={ genre } />
      <Checkbox
        checked={ checked }
        id={ genre }
        onChange={ onChange }
        value={ genre }
      />
    </div>
  );
}
