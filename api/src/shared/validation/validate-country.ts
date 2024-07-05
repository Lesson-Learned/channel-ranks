import { clientFormError } from '../errors/client-form-error';
import { Country, COUNTRIES } from '../types';

export function validateCountry(value: unknown): Country {
  if (COUNTRY_VALUE_INDEX[value as Country]) {
    return value as Country;
  }

  throw clientFormError({ country: 'Invalid country.' });
}

const COUNTRY_VALUE_INDEX = {
  [COUNTRIES[0]]: COUNTRIES[0],
  [COUNTRIES[1]]: COUNTRIES[1],
  [COUNTRIES[2]]: COUNTRIES[2]
} as const;
