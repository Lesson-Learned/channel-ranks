import {
  COUNTRIES,
  GENRES,
  NETWORKS,
  Show,
  STATUSES,
  STATUS_VALUE_MAP
} from '@api';
import {
  Button,
  Error,
  Form,
  ImageFileInput,
  Input,
  Label,
  Select,
  TextArea
} from '@shared';
import { CreateShowForm, useShowForm } from '../hooks/use-show-form';
import { GenreCheckbox } from './genre-checkbox';
import css from './show-form.module.css';

interface Props {
  save(form: CreateShowForm): Promise<void>
  show?: Show;
}

export function ShowForm({ save, show }: Props) {
  const {
    banner,
    country,
    description,
    endDate,
    endDateRequired,
    error,
    genre,
    handleSubmit,
    loading,
    name,
    network,
    notUpcoming,
    numEpisodes,
    numSeasons,
    poster,
    startDate,
    status
  } = useShowForm(save, show);

  return (
    <Form className={ css.form } onSubmit={ handleSubmit }>
      <Label className={ css.label } htmlFor="Banner" />
      <ImageFileInput
        disabled={ loading }
        id="Banner"
        onChange={ banner.setImage }
        required
      />

      <Select
        className={ css.select }
        disabled={ loading }
        labelClassName={ css.label }
        labelText="Country"
        onChange={ country.set }
        required
        value={ country.get }>
        { COUNTRIES.map(country => (
          <option key={ country } value={ country }>{ country }</option>
        ))}
      </Select>
      <br />

      <Label className={ css.label } htmlFor="Description" />
      <TextArea
        className={ css.textarea }
        disabled={ loading }
        id="Description"
        onChange={ description.set }
        required
        value={ description.get }
      />

      <Label className={ css.label } htmlFor="End Date" />
      <Input
        className={ css.input }
        disabled={ loading }
        id="End Date"
        onChange={ endDate.set }
        required={ endDateRequired }
        type="date"
        value={ endDate.get }
      />

      <fieldset className={ css.genre }>
        <legend className={ css.genreLegend }>Genre</legend>
        { GENRES.map(gen => (
          <GenreCheckbox
            checked={ genre.map[gen] ?? false }
            genre={ gen }
            key={ gen }
            onChange={ genre.set }
          />
        ))}
      </fieldset>

      <Label className={ css.label } htmlFor="Name" />
      <Input
        className={ css.input }
        disabled={ loading }
        id="Name"
        onChange={ name.set }
        required
        value={ name.get }
      />

      <Select
        className={ css.select }
        disabled={ loading }
        labelClassName={ css.label }
        labelText="Network"
        onChange={ network.set }
        required
        value={ network.get }>
        { NETWORKS.map(network => (
          <option key={ network } value={ network }>{ network }</option>
        ))}
      </Select>
      <br />

      <Label className={ css.label } htmlFor="Number of Episodes" />
      <Input
        className={ css.input }
        disabled={ loading }
        id="Number of Episodes"
        onChange={ numEpisodes.set }
        required={ notUpcoming }
        type="number"
        value={ numEpisodes.get }
      />

      <Label className={ css.label } htmlFor="Number of Seasons" />
      <Input
        className={ css.input }
        disabled={ loading }
        id="Number of Seasons"
        onChange={ numSeasons.set }
        required={ notUpcoming }
        type="number"
        value={ numSeasons.get }
      />

      <Label className={ css.label } htmlFor="Poster" />
      <ImageFileInput
        disabled={ loading }
        id="Poster"
        onChange={ poster.setImage }
        required
      />

      <Label className={ css.label } htmlFor="Release Date" />
      <Input
        className={ css.input }
        disabled={ loading }
        id="Release Date"
        onChange={ startDate.set }
        required={ notUpcoming }
        type={ notUpcoming ? 'date' : 'text' }
        value={ startDate.get }
      />

      <Select
        className={ css.select }
        disabled={ loading }
        labelClassName={ css.label }
        labelText="Status"
        onChange={ status.set }
        required
        value={ status.get }>
        { STATUSES.map(status => (
          <option key={ status } value={ status }>
            { STATUS_VALUE_MAP[status] }
          </option>
        ))}
      </Select>
      <br />

      { banner.error && <Error message={ banner.error } /> }
      { country.error && <Error message={ country.error } /> }
      { description.error && <Error message={ description.error } /> }
      { endDate.error && <Error message={ endDate.error } /> }
      { genre.error && <Error message={ genre.error } /> }
      { name.error && <Error message={ name.error } /> }
      { network.error && <Error message={ network.error } /> }
      { numEpisodes.error && <Error message={ numEpisodes.error } /> }
      { numSeasons.error && <Error message={ numSeasons.error } /> }
      { poster.error && <Error message={ poster.error } /> }
      { startDate.error && <Error message={ startDate.error } /> }
      { status.error && <Error message={ status.error } /> }
      { error && <Error message="Something went wrong." /> }

      <Button
        className={ css.submit }
        disabled={
          !country.get ||
          description.empty() ||
          (endDateRequired && endDate.empty()) ||
          genre.empty() ||
          loading ||
          name.empty() ||
          !network.get ||
          !status.get ||
          (notUpcoming && (
            numEpisodes.empty() ||
            numSeasons.empty() ||
            startDate.empty()
          ))
        }
        type="submit">
        Save
      </Button>
    </Form>
  );
}
