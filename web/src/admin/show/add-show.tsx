import { Countries, Genres, Networks } from '@api';
import { Form, Input, Label, Select, TextArea } from '@components';
import css from './add-show.module.css';
import { GenreCheckbox } from './components/genre-checkbox';
import { useCreateShow } from './hooks/use-create-show';

export function AddShow() {
  const {
    form,
    handleSubmit,
    loading,
    setGenre,
    setNumberField,
    setSelectField,
    setTextField
  } = useCreateShow();

  return (
    <main className={ css.container }>
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
    </main>
  );
}
