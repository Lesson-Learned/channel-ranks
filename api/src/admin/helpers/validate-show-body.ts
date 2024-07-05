import {
  clientFormError,
  STATUS,
  Status,
  validateCountry,
  validateDescription,
  validateGenre,
  validateName,
  validateNetwork,
  validateNumber,
  validateStatus,
  validateString
} from '../../shared';
import { Show } from '../../show';

export function validateShowRequestBody(body: any): Show {
  const status = validateStatus(body.status);

  return {
    country: validateCountry(body.country),
    description: validateDescription(body.description),
    endDate: validateEndDate(body, status),
    genre: validateGenre(body.genre),
    name: validateName(body.name),
    numEpisodes: validateNumEpisodes(body, status),
    numSeasons: validateNumSeasons(body, status),
    network: validateNetwork(body.network),
    startDate: validateStartDate(body, status),
    status
  };
}

function validateEndDate(body: any, status: Status): string | undefined {
  if (status === STATUS.UPCOMING) {
    return;
  }

  const endDate = validateString(body.endDate).match(/^\d{4}-\d{2}-\d{2}$/);

  if (endDate.value) {
    return endDate.value;
  }

  if (status === STATUS.ONGOING) {
    return;
  }

  throw clientFormError({ endDate: 'Invalid end date.' });
}

function validateNumEpisodes(
  body: any,
  status: Status
): number | undefined {
  const numEpisodes = validateNumber(body.numEpisodes).min(1);

  if (numEpisodes.value) {
    return numEpisodes.value;
  }

  if (status === STATUS.UPCOMING) {
    return;
  }

  throw clientFormError({ numEpisodes: 'Invalid number of episodes.' });
}

function validateNumSeasons(
  body: any,
  status: Status
): number | undefined {
  const numSeasons = validateNumber(body.numSeasons).min(1);

  if (numSeasons.value) {
    return numSeasons.value;
  }

  if (status === STATUS.UPCOMING) {
    return;
  }

  throw clientFormError({ numSeasons: 'Invalid number of seasons.' });
}

function validateStartDate(body: any, status: Status): string | undefined {
  const startDate = validateString(body.startDate).match(
    status === STATUS.UPCOMING
      ? /^\d{4}(-\d{2})?(-\d{2})?$/
      : /^\d{4}-\d{2}-\d{2}$/
  );

  if (startDate.value) {
    return startDate.value;
  }

  if (status === STATUS.UPCOMING) {
    return;
  }

  throw clientFormError({ startDate: 'Invalid start date.' });
}
