import { countDocuments, Query, SHOW_COLLECTION } from '../../libraries';
import { Show } from '../models';

export async function countShowDocuments(
  query?: Query<Show>
): Promise<number> {
  return countDocuments(SHOW_COLLECTION, query);
}
