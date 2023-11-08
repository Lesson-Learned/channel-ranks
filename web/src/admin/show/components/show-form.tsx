import { Countries, Genres, Networks } from '@api';
import { Form, Input, Label, Select, TextArea } from '@components';
import { ShowFormHook } from '../hooks/use-show-form';
import { GenreCheckbox } from './genre-checkbox';
import css from './show-form.module.css';

interface Props {
  handleSubmit(): void;
  loading: boolean;
  showFormMap: ShowFormHook;
}

export function ShowForm({
  handleSubmit,
  loading,
  showFormMap: { form, setGenre, setNumberField, setSelectField, setTextField }
}: Props) {
  return (
    <Form
      className={ css.form }
      disabled={ loading }
      onSubmit={ handleSubmit }
    >
      <Select
        className={ css.select }
        disabled={ loading }
        labelStyle={ css.label }
        labelText="Country"
        onChange={ setSelectField('country') }
        required
        value={ form.country }
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
        onChange={ setTextField('description') }
        required
        value={ form.description }
      />

      <Label className={ css.label } htmlFor="End Date" />
      <Input
        className={ css.input }
        disabled={ loading }
        id="End Date"
        onChange={ setTextField('endDate') }
        type="date"
        value={ form.endDate }
      />

      <Label className={ css.label } htmlFor="Episode Count" />
      <Input
        className={ css.input }
        disabled={ loading }
        id="Episode Count"
        onChange={ setNumberField('episodeCount') }
        required
        type="number"
        value={ form.episodeCount || '' }
      />

      <fieldset className={ css.genre }>
        <legend className={ css.genreLegend }>Genre</legend>
      { Genres.map(genre => (
        <GenreCheckbox
          checked={ form.genre.includes(genre) }
          genre={ genre }
          key={ genre }
          onChange={ setGenre }
        />
      ))}
      </fieldset>

      <Label className={ css.label } htmlFor="Name" />
      <Input
        className={ css.input }
        disabled={ loading }
        id="Name"
        onChange={ setTextField('name') }
        required
        value={ form.name }
      />

      <Select
        className={ css.select }
        disabled={ loading }
        labelStyle={ css.label }
        labelText="Network"
        onChange={ setSelectField('network') }
        required
        value={ form.network }
      >
        { Networks.map(network => (
          <option key={ network } value={ network }>{ network }</option>
        ))}
      </Select>
      <br />

      <Label className={ css.label } htmlFor="Release Date" />
      <Input
        className={ css.input }
        disabled={ loading }
        id="Release Date"
        onChange={ setTextField('releaseDate') }
        required
        type="date"
        value={ form.releaseDate }
      />

      <Label className={ css.label } htmlFor="Season Count" />
      <Input
        className={ css.input }
        disabled={ loading }
        id="Season Count"
        onChange={ setNumberField('seasonCount') }
        required
        type="number"
        value={ form.seasonCount || '' }
      />

      <button
        className={ css.submit }
        disabled={ loading }
        type="submit"
      >
        Save Show
      </button>
    </Form>
  );
}
