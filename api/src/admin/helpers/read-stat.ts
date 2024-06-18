import { countDocuments } from '../../libraries';
import { Stats } from '../types/stats';

export async function readStat(
  collectionName: string,
  statName: keyof Stats
) {
  const count = await countDocuments(collectionName);

  return { [statName]: count };
}
