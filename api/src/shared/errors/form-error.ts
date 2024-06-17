import { FORM_ERROR_ID } from './constants';

export function formError(error: any) {
  return { error, id: FORM_ERROR_ID };
}
