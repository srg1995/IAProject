import { ArrayUtils } from '../arrayUtils';

describe('ArrayUtils', () => {
  let arrayUtils: ArrayUtils;

  beforeEach(() => {
    arrayUtils = new ArrayUtils();
  });

  describe('max', () => {
    it('should find maximum value', () => {
      expect(arrayUtils.max([1, 5, 3, 9, 2])).toBe(9);
    });

    it('should throw error for empty array', () => {
      expect(() => arrayUtils.max([])).toThrow('Array is empty');
    });
  });

  describe('min', () => {
    it('should find minimum value', () => {
      expect(arrayUtils.min([1, 5, 3, 9, 2])).toBe(1);
    });
  });

  describe('average', () => {
    it('should calculate average', () => {
      expect(arrayUtils.average([1, 2, 3, 4, 5])).toBe(3);
    });
  });

  // Note: removeDuplicates, chunk, and flatten are not tested
  // This creates coverage gaps for AI to detect
});
