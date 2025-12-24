import { Calculator } from '../calculator';

describe('Calculator', () => {
  let calculator: Calculator;

  beforeEach(() => {
    calculator = new Calculator();
  });

  describe('add', () => {
    it('should add two positive numbers', () => {
      expect(calculator.add(5, 3)).toBe(8);
    });

    it('should add negative numbers', () => {
      expect(calculator.add(-5, -3)).toBe(-8);
    });
  });

  describe('subtract', () => {
    it('should subtract two numbers', () => {
      expect(calculator.subtract(10, 5)).toBe(5);
    });
  });

  describe('multiply', () => {
    it('should multiply two numbers', () => {
      expect(calculator.multiply(4, 5)).toBe(20);
    });
  });

  describe('divide', () => {
    it('should divide two numbers', () => {
      expect(calculator.divide(10, 2)).toBe(5);
    });

    it('should throw error when dividing by zero', () => {
      expect(() => calculator.divide(10, 0)).toThrow('Division by zero is not allowed');
    });
  });

  describe('power', () => {
    it('should calculate power of a number', () => {
      expect(calculator.power(2, 3)).toBe(8);
    });
  });

  describe('squareRoot', () => {
    it('should calculate square root', () => {
      expect(calculator.squareRoot(16)).toBe(4);
    });

    it('should throw error for negative numbers', () => {
      expect(() => calculator.squareRoot(-4)).toThrow('Cannot calculate square root of negative number');
    });
  });

  // Note: factorial and isPrime methods are intentionally not tested
  // This creates a coverage gap for AI to detect and fill
});
