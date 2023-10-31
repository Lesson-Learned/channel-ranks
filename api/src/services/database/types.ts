import { WithId } from 'mongodb';

export interface ReadOptions<D> {
  limit?: number;
  query?: Query<D>;
  sort?: { [key: string]: -1 | 1 };
}

export type Query<D> = Partial<{ [key in keyof WithId<D>]: any }>;
export type Update<D> = {
  $set?: Partial<Omit<D, '_id'>>;
  $unset?: Partial<{ [key in keyof Partial<Omit<D, '_id'>>]: '' }>
};