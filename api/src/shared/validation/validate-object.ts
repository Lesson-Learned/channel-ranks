export function validateObject(value: unknown): ObjectValidator {
  if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
    return {
      value,
      valueOrThrow(error): object {
        if (this.value) {
          return value;
        };

        throw error ?? this.error ?? 'No object value.';
      }
    };
  }

  return {
    error: 'Invalid object.',
    valueOrThrow(error) {
      throw error ?? this.error;      
    }
  };
}

interface ObjectValidator {
  error?: string;
  value?: object;
  valueOrThrow(error?: string): object;
}
