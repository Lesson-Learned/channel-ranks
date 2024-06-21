export function validateString(value: unknown): StringValidator {
  if (typeof value === 'string') {
    return {
      value,
      match(pattern) {
        if (this.value && pattern.test(this.value)) {
          return this;
        }

        return withError('String does not match pattern.');
      },
      required() {
        if (this.value?.length) {
          return this;
        }
  
        return withError('Empty string.');
      },
      trim() {
        if (this.value) {
          this.value = this.value.trim();
        }

        return this;
      },
      valueOrThrow(error) {
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
    required() {
      return this;
    },
    match() {
      return this;
    },
    trim() {
      return this;
    },
    valueOrThrow(error) {
      throw error ?? this.error;
    },
  };
}

interface StringValidator {
  error?: string;
  match(pattern: RegExp): StringValidator;
  required(): StringValidator;
  trim(): StringValidator;
  value?: string;
  valueOrThrow(error?: string): string;
}
