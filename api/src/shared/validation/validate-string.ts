export function validateString(value: unknown): StringValidator {
  if (typeof value === 'string') {
    return {
      value,
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
  
        throw error ?? this.error;
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
    trim(): StringValidator {
      return this;
    },
    valueOrThrow(error): string {
      throw error ?? this.error;
    },
  };
}

interface StringValidator {
  error?: string;
  required(): StringValidator;
  trim(): StringValidator;
  value?: string;
  valueOrThrow(error?: string): string;
}
