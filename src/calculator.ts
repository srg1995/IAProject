/**
 * Calculator class with basic arithmetic operations
 * This class is intentionally designed to test AI code review and coverage capabilities
 */
export class Calculator {
  /**
   * Adds two numbers
   * @param a First number
   * @param b Second number
   * @returns Sum of a and b
   */
  add(a: number, b: number): number {
    return a + b;
  }

  /**
   * Subtracts b from a
   * @param a First number
   * @param b Second number
   * @returns Difference of a and b
   */
  subtract(a: number, b: number): number {
    return a - b;
  }

  /**
   * Multiplies two numbers
   * @param a First number
   * @param b Second number
   * @returns Product of a and b
   */
  multiply(a: number, b: number): number {
    return a * b;
  }

  /**
   * Divides a by b
   * @param a Numerator
   * @param b Denominator
   * @returns Quotient of a and b
   * @throws Error if b is zero
   */
  divide(a: number, b: number): number {
    if (b === 0) {
      throw new Error('Division by zero is not allowed');
    }
    return a / b;
  }

  /**
   * Calculates power of a number
   * @param base Base number
   * @param exponent Exponent
   * @returns base raised to the power of exponent
   */
  power(base: number, exponent: number): number {
    return Math.pow(base, exponent);
  }

  /**
   * Calculates square root of a number
   * @param n Number to calculate square root
   * @returns Square root of n
   */
  squareRoot(n: number): number {
    if (n < 0) {
      throw new Error('Cannot calculate square root of negative number');
    }
    return Math.sqrt(n);
  }

  /**
   * Calculates factorial of a number
   * This method has intentional issues for AI to detect
   * @param n Number to calculate factorial
   * @returns Factorial of n
   */
  factorial(n: number): number {
    // Bug: doesn't handle negative numbers properly
    if (n === 0 || n === 1) {
      return 1;
    }
    return n * this.factorial(n - 1);
  }

  /**
   * Checks if a number is prime
   * This method is not covered by tests initially
   * @param n Number to check
   * @returns true if n is prime, false otherwise
   */
  isPrime(n: number): boolean {
    if (n <= 1) return false;
    if (n <= 3) return true;
    if (n % 2 === 0 || n % 3 === 0) return false;
    
    for (let i = 5; i * i <= n; i += 6) {
      if (n % i === 0 || n % (i + 2) === 0) {
        return false;
      }
    }
    return true;
  }
}
