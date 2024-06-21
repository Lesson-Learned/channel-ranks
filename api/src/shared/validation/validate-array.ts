export function validateArray<T>(value: unknown): ArrayValidator {
  if (Array.isArray(value)) {
    return {
      value,
      required() {
        if (this.value?.length) {
          return this;
        }
  
        return withError('Empty array.');
      },
      valueOrThrow(error) {
        if (this.value) {
          return this.value;
        }
  
        throw error ?? this.error;
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
      throw error ?? this.error;
    },
  };
}

interface ArrayValidator {
  error?: string;
  required(): ArrayValidator;
  value?: unknown[];
  valueOrThrow(error?: string): unknown[];
}
