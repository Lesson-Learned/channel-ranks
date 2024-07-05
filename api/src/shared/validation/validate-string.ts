export function validateString(value: unknown): StringValidator {
  if (typeof value === 'string') {
    return {
      value,

      match(pattern): StringValidator {
        if (this.value && pattern.test(this.value)) {
          return this;
        }

        return withError('String does not match pattern.');
      },

      required(): StringValidator {
        if (this.value?.length) {
          return this;
        }
  
        return withError('Empty string.');
      },

      trim(): StringValidator {
        if (this.value) {
          this.value = this.value.trim();
        }

        return this;
      },

      valueOrThrow(error): string {
        if (this.value) {
          return this.value;
        }
  
        throw new Error(error ?? this.error);
      }
    };
  }

  return withError('Invalid string value.');
}

function withError(error: string): StringValidator {
  return {
    error,
    required(): StringValidator {
      return this;
    },
    match(): StringValidator {
      return this;
    },
    trim(): StringValidator {
      return this;
    },
    valueOrThrow(error) {
      throw new Error(error ?? this.error);
    },
  };
}

type StringValidator = {
  error?: string;
  match(pattern: RegExp): StringValidator;
  required(): StringValidator;
  trim(): StringValidator;
  value?: string;
  valueOrThrow(error?: string): string;
};
