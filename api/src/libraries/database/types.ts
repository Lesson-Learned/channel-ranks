import {
  Filter,
  InferIdType,
  ObjectId,
  UpdateFilter,
  WithId as MongoWithId
} from 'mongodb';

export interface ReadOptions<D> {
  limit?: number;
  query?: Query<D>;
  sort?: { [key in keyof D]: -1 | 1 };
}

export type DefaultId = ObjectId;
export type DocId<D> = InferIdType<D>;
export type Query<D> = Filter<D>;
export type Update<D> = UpdateFilter<D>;
export type WithId<D> = MongoWithId<D>;
