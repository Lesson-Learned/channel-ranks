import { ObjectId } from 'mongodb';

export function validateObjectId(value: unknown): ObjectIdValidator {
  try {
    if (typeof value === 'string') {
      return {
        value: new ObjectId(value),
        valueOrThrow(error) {
          if (this.value) {
            return this.value;
          }

          throw new Error(error ?? 'Invalid ObjectId.');
        },
      };
    }

    throw new Error('Invalid ID.'); 
  } catch {
    return withError('Invalid ObjectId.');
  }
}

function withError(error: string): ObjectIdValidator {
  return {
    error,
    valueOrThrow(error) {
      throw error ?? this.error;
    },
  };
}

type ObjectIdValidator = {
  error?: string;
  value?: ObjectId;
  valueOrThrow(error?: string): ObjectId;
};
