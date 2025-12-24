import { StringUtils } from '../stringUtils';

describe('StringUtils', () => {
  let stringUtils: StringUtils;

  beforeEach(() => {
    stringUtils = new StringUtils();
  });

  describe('reverse', () => {
    it('should reverse a string', () => {
      expect(stringUtils.reverse('hello')).toBe('olleh');
    });

    it('should handle empty string', () => {
      expect(stringUtils.reverse('')).toBe('');
    });
  });

  describe('capitalize', () => {
    it('should capitalize first letter', () => {
      expect(stringUtils.capitalize('hello')).toBe('Hello');
    });

    it('should handle empty string', () => {
      expect(stringUtils.capitalize('')).toBe('');
    });
  });

  describe('isPalindrome', () => {
    it('should identify palindromes', () => {
      expect(stringUtils.isPalindrome('racecar')).toBe(true);
      expect(stringUtils.isPalindrome('A man a plan a canal Panama')).toBe(true);
    });

    it('should identify non-palindromes', () => {
      expect(stringUtils.isPalindrome('hello')).toBe(false);
    });
  });

  // Note: countVowels, truncate, and removeWhitespace are not tested
  // This creates coverage gaps for AI to detect
});
