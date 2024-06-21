import {
  formError,
  STATUS,
  Status,
  validateCountry,
  validateDescription,
  validateGenre,
  validateName,
  validateNetwork,
  validateNumber,
  validateObject,
  validateStatus,
  validateString
} from '../../shared';
import { Show } from '../../show';

export function validateShowBody(body: unknown): Show {
  const cleanBody = validateObject(body).valueOrThrow(
    'Request body is not an object.'
  );

  if (
    'country' in cleanBody &&
    'description' in cleanBody &&
    'genre' in cleanBody &&
    'name' in cleanBody &&
    'network' in cleanBody &&
    'status' in cleanBody
  ) {
    const status = validateStatus(cleanBody.status);

    return {
      country: validateCountry(cleanBody.country),
      description: validateDescription(cleanBody.description),
      endDate: validateEndDate(cleanBody, status),
      genre: validateGenre(cleanBody.genre),
      name: validateName(cleanBody.name),
      numEpisodes: validateNumEpisodes(cleanBody, status),
      numSeasons: validateNumSeasons(cleanBody, status),
      network: validateNetwork(cleanBody.network),
      startDate: validateStartDate(cleanBody, status),
      status
    };
  }

  throw 'Request body missing properties.';
}

function validateEndDate(body: object, status: Status): string | undefined {
  if (status === STATUS.UPCOMING) {
    return;
  }

  if ('endDate' in body) {
    const endDate = validateString(body.endDate).match(/^\d{4}-\d{2}-\d{2}$/);

    if (endDate.value) {
      return endDate.value;
    }

    throw formError({ endDate: 'Invalid end date.' });
  }

  if (status === STATUS.ONGOING) {
    return;
  }

  throw formError({ endDate: 'Invalid end date.' });
}

function validateNumEpisodes(
  body: object,
  status: Status
): number | undefined {
  if ('numEpisodes' in body) {
    const numEpisodes = validateNumber(body.numEpisodes).min(1);

    if (numEpisodes.value) {
      return numEpisodes.value;
    }

    throw formError({ numEpisodes: 'Invalid number of episodes.' });
  }

  if (status === STATUS.UPCOMING) {
    return;
  }

  throw formError({ numEpisodes: 'Invalid number of episodes.' });
}

function validateNumSeasons(
  body: object,
  status: Status
): number | undefined {
  if ('numSeasons' in body) {
    const numSeasons = validateNumber(body.numSeasons).min(1);

    if (numSeasons.value) {
      return numSeasons.value;
    }

    throw formError({ numSeasons: 'Invalid number of seasons.' });
  }

  if (status === STATUS.UPCOMING) {
    return;
  }

  throw formError({ numSeasons: 'Invalid number of seasons.' });
}

function validateStartDate(body: object, status: Status): string | undefined {
  if ('startDate' in body) {
    const startDate = validateString(body.startDate).match(
      status === STATUS.UPCOMING
        ? /^\d{4}(-\d{2})?(-\d{2})?$/
        : /^\d{4}-\d{2}-\d{2}$/
    );

    if (startDate.value) {
      return startDate.value;
    }

    throw formError({ startDate: 'Invalid start date.' });
  }

  if (status === STATUS.UPCOMING) {
    return;
  }

  throw formError({ startDate: 'Invalid start date.' });
}
