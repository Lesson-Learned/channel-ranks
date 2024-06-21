import { formError } from '../errors/form-error';
import { Country, COUNTRY_VALUE_MAP } from '../types';

export function validateCountry(value: unknown): Country {
  if (COUNTRY_VALUE_MAP[value as Country]) {
    return value as Country;
  }

  throw formError({ country: 'Invalid country.' });
}
