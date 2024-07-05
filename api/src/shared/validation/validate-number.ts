export function validateNumber(value: unknown): NumberValidator {
  const number = Number(value);

  if (!isNaN(number)) {
    return {
      value: number,

      default(num): number {
        if (this.value) {
          return this.value;
        }
  
        return num;
      },

      max(num): NumberValidator {
        if (this.value && this.value <= num) {
          return this;
        }
  
        return withError('Number is greater than maximum.');
      },

      min(num): NumberValidator {
        if (this.value && this.value >= num) {
          return this;
        }
  
        return withError('Number is less than minimum.');
      },

      valueOrThrow(error): number {
        if (this.value) {
          return this.value;
        }
  
        throw new Error(error ?? this.error);
      }
    };
  }

  return withError('Invalid number value.');
}

function withError(error: string): NumberValidator {
  return {
    error,
    default(num): number {
      return num;
    },
    max(): NumberValidator {
      return this;
    },
    min(): NumberValidator {
      return this;
    },
    valueOrThrow(error) {
      throw new Error(error ?? this.error);
    }
  };
}

type NumberValidator = {
  error?: string;
  default(num: number): number;
  max(num: number): NumberValidator;
  min(num: number): NumberValidator;
  value?: number;
  valueOrThrow(error?: string): number;
};
