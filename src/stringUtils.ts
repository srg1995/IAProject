/**
 * String utility functions
 * These functions demonstrate various string operations for testing
 */
export class StringUtils {
  /**
   * Reverses a string
   * @param str String to reverse
   * @returns Reversed string
   */
  reverse(str: string): string {
    return str.split('').reverse().join('');
  }

  /**
   * Capitalizes first letter of a string
   * @param str String to capitalize
   * @returns Capitalized string
   */
  capitalize(str: string): string {
    if (!str) return str;
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  /**
   * Checks if a string is a palindrome
   * @param str String to check
   * @returns true if palindrome, false otherwise
   */
  isPalindrome(str: string): boolean {
    const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    return cleaned === cleaned.split('').reverse().join('');
  }

  /**
   * Counts vowels in a string
   * @param str String to count vowels in
   * @returns Number of vowels
   */
  countVowels(str: string): number {
    const vowels = 'aeiouAEIOU';
    let count = 0;
    for (const char of str) {
      if (vowels.includes(char)) {
        count++;
      }
    }
    return count;
  }

  /**
   * Truncates a string to specified length
   * This method is not covered by tests initially
   * @param str String to truncate
   * @param length Maximum length
   * @returns Truncated string
   */
  truncate(str: string, length: number): string {
    if (str.length <= length) {
      return str;
    }
    return str.substring(0, length) + '...';
  }

  /**
   * Removes whitespace from string
   * Bug: doesn't handle all whitespace characters
   * @param str String to remove whitespace from
   * @returns String without whitespace
   */
  removeWhitespace(str: string): string {
    return str.replace(/ /g, '');
  }
}
