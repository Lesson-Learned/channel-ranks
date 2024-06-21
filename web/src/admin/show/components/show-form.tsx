import {
  COUNTRIES,
  CreateShowBody,
  GENRES,
  Genre,
  NETWORKS,
  Show,
  Status,
  STATUSES,
  STATUS_VALUE_MAP,
  STATUS_KEY_MAP
} from '@api';
import {
  Button,
  Error,
  Form,
  Input,
  Label,
  Select,
  TextArea,
  useCheckbox,
  useInput,
  useSelect,
  useStatus
} from '@shared';
import { GenreCheckbox } from './genre-checkbox';
import css from './show-form.module.css';

interface Props {
  save(body: CreateShowBody): Promise<Show>;
  show?: Show;
}

export function ShowForm({ save, show }: Props) {
  const country = useSelect(show?.country);
  const description = useInput(show?.description);
  const endDate = useInput(show?.endDate);
  const genre = useCheckbox(toGenreBooleanMap(show?.genre));
  const name = useInput(show?.name);
  const network = useSelect(show?.network);
  const numEpisodes = useInput(show?.numEpisodes?.toString());
  const numSeasons = useInput(show?.numSeasons?.toString());
  const startDate = useInput(show?.startDate);
  const status = useSelect(show?.status.toString());
  const { error, loading, setError, setLoading, setNone } = useStatus();

  const endDateRequired =
    Number(status.get) === STATUS_KEY_MAP.CANCELLED ||
    Number(status.get) === STATUS_KEY_MAP.FINISHED;
  const notUpcoming = Number(status.get) !== STATUS_KEY_MAP.UPCOMING;

  function handleSubmit() {
    if (!country.get) {
      return country.setError('Please select a country.');
    }

    if (description.empty()) {
      return description.setError('Please enter a description.');
    }

    if (genre.empty()) {
      return genre.setError('Please select genre.');
    }

    if (name.empty()) {
      return name.setError('Please enter a name.');
    }

    if (!network.get) {
      return network.setError('Please select a network.');
    }

    if (!status.get) {
      return status.setError('Please select a status.');
    }

    if (endDateRequired && endDate.empty()) {
      return endDate.setError('Please select a date.');
    } 

    if (notUpcoming) {
      if (numEpisodes.empty()) {
        return numEpisodes.setError('Please enter the number of episodes.');
      }

      if (numSeasons.empty()) {
        return numSeasons.setError('Please enter the number of seasons.');
      }

      if (startDate.empty()) {
        return startDate.setError('Please select a date.');
      }
    }

    setLoading();
    save({
      country: country.get,
      description: description.clean(),
      endDate: endDate.get || undefined,
      genre: genre.toList(),
      name: name.clean(),
      network: network.get,
      numEpisodes: numEpisodes.get ? Number(numEpisodes.get) : undefined,
      numSeasons: numSeasons.get ? Number(numSeasons.get) : undefined,
      startDate: startDate.clean() || undefined,
      status: Number(status.get) as Status
    })
    .then(setNone)
    .catch(e => {
      if (e?.FORM_ERROR) {
        if (e.FORM_ERROR.country) {
          country.setError(e.FORM_ERROR.country);
        } else if (e.FORM_ERROR.description) {
          description.setError(e.FORM_ERROR.description);
        } else if (e.FORM_ERROR.endDate) {
          endDate.setError(e.FORM_ERROR.endDate);
        } else if (e.FORM_ERROR.genre) {
          genre.setError(e.FORM_ERROR.genre);
        } else if (e.FORM_ERROR.name) {
          name.setError(e.FORM_ERROR.name);
        } else if (e.FORM_ERROR.network) {
          network.setError(e.FORM_ERROR.network);
        } else if (e.FORM_ERROR.numEpisodes) {
          numEpisodes.setError(e.FORM_ERROR.numEpisodes);
        } else if (e.FORM_ERROR.numSeasons) {
          numSeasons.setError(e.FORM_ERROR.numSeasons);
        } else if (e.FORM_ERROR.startDate) {
          startDate.setError(e.FORM_ERROR.startDate);
        } else if (e.FORM_ERROR.status) {
          status.setError(e.FORM_ERROR.status);
        }

        setNone();
      } else {
        setError();
      }
    });
  }

  return (
    <Form className={ css.form } onSubmit={ handleSubmit }>
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

      { country.error && <Error message={ country.error } /> }
      { description.error && <Error message={ description.error } /> }
      { endDate.error && <Error message={ endDate.error } /> }
      { genre.error && <Error message={ genre.error } /> }
      { name.error && <Error message={ name.error } /> }
      { network.error && <Error message={ network.error } /> }
      { numEpisodes.error && <Error message={ numEpisodes.error } /> }
      { numSeasons.error && <Error message={ numSeasons.error } /> }
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

function toGenreBooleanMap(genre?: Genre[]): Record<Genre, boolean> {
  const map: Record<Genre, boolean> = {} as Record<Genre, boolean>;

  if (genre) {
    for (const gen of genre) {
      map[gen] = true;
    }
  }

  return map;
}
