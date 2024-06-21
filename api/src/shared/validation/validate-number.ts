export function validateNumber(value: unknown): NumberValidator {
  const number = Number(value);

  if (!isNaN(number)) {
    return {
      value: number,
      default(num) {
        if (this.value) {
          return this.value;
        }
  
        return num;
      },
      max(num) {
        if (this.value && this.value <= num) {
          return this;
        }
  
        return withError('Number is greater than maximum.');
      },
      min(num) {
        if (this.value && this.value >= num) {
          return this;
        }
  
        return withError('Number is less than minimum.');
      },
      valueOrThrow(error) {
        if (this.value) {
          return this.value;
        }
  
        throw error ?? this.error;
      }
    };
  }

  return withError('Invalid number value.');
}

function withError(error: string): NumberValidator {
  return {
    error,
    default(num) {
      return num;
    },
    max() {
      return this;
    },
    min() {
      return this;
    },
    valueOrThrow(error) {
      throw error ?? this.error;
    }
  };
}

interface NumberValidator {
  error?: string;
  default(num: number): number;
  max(num: number): NumberValidator;
  min(num: number): NumberValidator;
  value?: number;
  valueOrThrow(error?: string): number;
}
