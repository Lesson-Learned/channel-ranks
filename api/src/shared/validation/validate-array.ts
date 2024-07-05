export function validateArray(value: unknown): ArrayValidator {
  if (Array.isArray(value)) {
    return {
      value,

      required(): ArrayValidator {
        if (this.value?.length) {
          return this;
        }
  
        return withError('Empty array.');
      },

      valueOrThrow(error): unknown[] {
        if (this.value) {
          return this.value;
        }
  
        throw new Error(error ?? this.error);
      }
    };
  }

  return withError('Invalid array value.');
}

function withError(error: string): ArrayValidator {
  return {
    error,
    required() {
      return this;
    },
    valueOrThrow(error) {
      throw new Error(error ?? this.error);
    },
  };
}

type ArrayValidator = {
  error?: string;
  required(): ArrayValidator;
  value?: unknown[];
  valueOrThrow(error?: string): unknown[];
};
