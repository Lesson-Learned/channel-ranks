export function validateObject(value: unknown): ObjectValidator {
  if (value && typeof value === 'object' && !Array.isArray(value)) {
    return {
      value,

      valueOrThrow(error): object {
        if (this.value) {
          return value;
        };

        throw new Error(error ?? this.error ?? 'No object value.');
      }
    };
  }

  return {
    error: 'Invalid object.',

    valueOrThrow(error) {
      throw new Error(error ?? this.error);
    }
  };
}

type ObjectValidator = {
  error?: string;
  value?: object;
  valueOrThrow(error?: string): object;
};
