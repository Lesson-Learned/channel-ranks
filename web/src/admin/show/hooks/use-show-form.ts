import { CreateShowBody, Genre, Show, Status, STATUS_KEY_MAP, } from '@api';
import {
  useCheckbox,
  useFileInput,
  useInput,
  useSelect,
  useStatus
} from '@shared';

export function useShowForm(
  save: (form: CreateShowForm) => Promise<void>,
  show?: Show
) {
  const banner = useFileInput();
  const country = useSelect(show?.country);
  const description = useInput(show?.description);
  const endDate = useInput(show?.endDate);
  const genre = useCheckbox(toGenreBooleanMap(show?.genre));
  const name = useInput(show?.name);
  const network = useSelect(show?.network);
  const numEpisodes = useInput(show?.numEpisodes?.toString());
  const numSeasons = useInput(show?.numSeasons?.toString());
  const poster = useFileInput();
  const startDate = useInput(show?.startDate);
  const status = useSelect(show?.status.toString());
  const { error, loading, setError, setLoading, setNone } = useStatus();

  const endDateRequired =
    Number(status.get) === STATUS_KEY_MAP.CANCELLED ||
    Number(status.get) === STATUS_KEY_MAP.FINISHED;
  const notUpcoming = Number(status.get) !== STATUS_KEY_MAP.UPCOMING;

  function handleSubmit() {
    let isValid = true;

    if (!country.get) {
      country.setError('Please select a country.');
      isValid = false;
    }

    if (description.empty()) {
      description.setError('Please enter a description.');
      isValid = false;
    }

    if (genre.empty()) {
      genre.setError('Please select genre.');
      isValid = false;
    }

    if (name.empty()) {
      name.setError('Please enter a name.');
      isValid = false;
    }

    if (!network.get) {
      network.setError('Please select a network.');
      isValid = false;
    }

    if (!status.get) {
      status.setError('Please select a status.');
      isValid = false;
    }

    if (endDateRequired && endDate.empty()) {
      endDate.setError('Please select a date.');
      isValid = false;
    } 

    if (notUpcoming) {
      if (numEpisodes.empty()) {
        numEpisodes.setError('Please enter the number of episodes.');
        isValid = false;
      }

      if (numSeasons.empty()) {
        numSeasons.setError('Please enter the number of seasons.');
        isValid = false;
      }

      if (startDate.empty()) {
        startDate.setError('Please select a date.');
        isValid = false;
      }
    }

    if (!isValid) {
      return;
    }

    setLoading();
    save({
      banner: banner.file,
      country: country.get!,
      description: description.clean(),
      endDate: endDate.get,
      genre: genre.toList(),
      name: name.clean(),
      network: network.get!,
      numEpisodes: numEpisodes.get ? Number(numEpisodes.get) : undefined,
      numSeasons: numSeasons.get ? Number(numSeasons.get) : undefined,
      poster: poster.file,
      startDate: startDate.clean() || undefined,
      status: Number(status.get) as Status
    })
    .then(setNone)
    .catch(err => {
      if (err?.FORM_ERROR) {
        if (err.FORM_ERROR.country) {
          country.setError(err.FORM_ERROR.country);
        }
  
        else if (err.FORM_ERROR.description) {
          description.setError(err.FORM_ERROR.description);
        }
  
        else if (err.FORM_ERROR.endDate) {
          endDate.setError(err.FORM_ERROR.endDate);
        }
  
        else if (err.FORM_ERROR.genre) {
          genre.setError(err.FORM_ERROR.genre);
        }
  
        else if (err.FORM_ERROR.name) {
          name.setError(err.FORM_ERROR.name);
        }
  
        else if (err.FORM_ERROR.network) {
          network.setError(err.FORM_ERROR.network);
        }
        
        else if (err.FORM_ERROR.numEpisodes) {
          numEpisodes.setError(err.FORM_ERROR.numEpisodes);
        }
        
        else if (err.FORM_ERROR.numSeasons) {
          numSeasons.setError(err.FORM_ERROR.numSeasons);
        }
        
        else if (err.FORM_ERROR.startDate) {
          startDate.setError(err.FORM_ERROR.startDate);
        }
        
        else if (err.FORM_ERROR.status) {
          status.setError(err.FORM_ERROR.status);
        }
  
        setNone();
      } else {
        setError();
      }
    });
  }

  return {
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
  };
}

export type CreateShowForm = CreateShowBody & {
  banner: File | undefined;
  poster: File | undefined;
};

function toGenreBooleanMap(genre?: Genre[]): Record<Genre, boolean> {
  const map: Record<Genre, boolean> = {} as Record<Genre, boolean>;

  if (genre) {
    for (const gen of genre) {
      map[gen] = true;
    }
  }

  return map;
}
