import { Countries, Genres, Networks } from '@api';
import { FileInput, Form, Input, Label, Select, TextArea } from '@shared';
import { ShowFormInterface } from '../hooks/use-show-form';
import { Button } from './button';
import { GenreCheckbox } from './genre-checkbox';
import css from './show-form.module.css';

interface Props {
  form: ShowFormInterface;
  handleSubmit(): void;
  loading: boolean;
}

export function ShowForm({ form, handleSubmit, loading }: Props) {
  return (
    <Form className={ css.form } onSubmit={ handleSubmit }>
      <Label className={ css.label } htmlFor="Banner" />
      <FileInput id="Banner" onChange={ form.setFileField('banner') } />
      <br />

      <Select
        className={ css.select }
        disabled={ loading }
        labelStyle={ css.label }
        labelText="Country"
        onChange={ form.setSelectField('country') }
        required
        value={ form.fields.country }
      >
        { Countries.map(country => (
          <option key={ country } value={ country }>{ country }</option>
        ))}
      </Select>
      <br />

      <Label className={ css.label } htmlFor="Description" />
      <TextArea
        className={ css.textarea }
        disabled={ loading }
        id="Description"
        onChange={ form.setTextField('description') }
        required
        value={ form.fields.description }
      />

      <Label className={ css.label } htmlFor="End Date" />
      <Input
        className={ css.input }
        disabled={ loading }
        id="End Date"
        onChange={ form.setTextField('endDate') }
        type="date"
        value={ form.fields.endDate }
      />

      <Label className={ css.label } htmlFor="Episode Count" />
      <Input
        className={ css.input }
        disabled={ loading }
        id="Episode Count"
        onChange={ form.setNumberField('episodeCount') }
        required
        type="number"
        value={ form.fields.episodeCount || '' }
      />

      <fieldset className={ css.genre }>
        <legend className={ css.genreLegend }>Genre</legend>
        { Genres.map(genre => (
          <GenreCheckbox
            checked={ form.fields.genre.includes(genre) }
            genre={ genre }
            key={ genre }
            onChange={ form.setGenre }
          />
        ))}
      </fieldset>

      <Label className={ css.label } htmlFor="Name" />
      <Input
        className={ css.input }
        disabled={ loading }
        id="Name"
        onChange={ form.setTextField('name') }
        required
        value={ form.fields.name }
      />

      <Select
        className={ css.select }
        disabled={ loading }
        labelStyle={ css.label }
        labelText="Network"
        onChange={ form.setSelectField('network') }
        required
        value={ form.fields.network }
      >
        { Networks.map(network => (
          <option key={ network } value={ network }>{ network }</option>
        ))}
      </Select>
      <br />

      <Label className={ css.label } htmlFor="Poster" />
      <FileInput id="Poster" onChange={ form.setFileField('poster') } />
      <br />

      <Label className={ css.label } htmlFor="Release Date" />
      <Input
        className={ css.input }
        disabled={ loading }
        id="Release Date"
        onChange={ form.setTextField('releaseDate') }
        required
        type="date"
        value={ form.fields.releaseDate }
      />

      <Label className={ css.label } htmlFor="Season Count" />
      <Input
        className={ css.input }
        disabled={ loading }
        id="Season Count"
        onChange={ form.setNumberField('seasonCount') }
        required
        type="number"
        value={ form.fields.seasonCount || '' }
      />

      <Button
        className={ css.submit }
        disabled={ loading }
        type="submit"
      >
        Save Show
      </Button>
    </Form>
  );
}
