import {
  Filter,
  InferIdType,
  UpdateFilter,
  UpdateOptions as MongoUpdateOptions,
  WithId as MongoWithId
} from 'mongodb';

export type DocId<D> = InferIdType<D>;
export type Query<D> = Filter<D>;
export type ReadOptions<D> = {
  limit?: number;
  query?: Query<D>;
  sort?: { [key in keyof D]: -1 | 1 };
};
export type Update<D> = UpdateFilter<D>;
export type UpdateOptions = MongoUpdateOptions;
export type WithId<D> = MongoWithId<D>;
