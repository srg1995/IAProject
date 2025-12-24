/**
 * Array utility functions
 * These functions demonstrate various array operations for testing
 */
export class ArrayUtils {
  /**
   * Finds the maximum value in an array
   * @param arr Array of numbers
   * @returns Maximum value
   */
  max(arr: number[]): number {
    if (arr.length === 0) {
      throw new Error('Array is empty');
    }
    return Math.max(...arr);
  }

  /**
   * Finds the minimum value in an array
   * @param arr Array of numbers
   * @returns Minimum value
   */
  min(arr: number[]): number {
    if (arr.length === 0) {
      throw new Error('Array is empty');
    }
    return Math.min(...arr);
  }

  /**
   * Calculates the average of an array
   * @param arr Array of numbers
   * @returns Average value
   */
  average(arr: number[]): number {
    if (arr.length === 0) {
      throw new Error('Array is empty');
    }
    const sum = arr.reduce((acc, val) => acc + val, 0);
    return sum / arr.length;
  }

  /**
   * Removes duplicates from an array
   * @param arr Array with potential duplicates
   * @returns Array without duplicates
   */
  removeDuplicates<T>(arr: T[]): T[] {
    return [...new Set(arr)];
  }

  /**
   * Chunks an array into smaller arrays
   * This method is not covered by tests initially
   * @param arr Array to chunk
   * @param size Size of each chunk
   * @returns Array of chunks
   */
  chunk<T>(arr: T[], size: number): T[][] {
    const chunks: T[][] = [];
    for (let i = 0; i < arr.length; i += size) {
      chunks.push(arr.slice(i, i + size));
    }
    return chunks;
  }

  /**
   * Flattens a nested array
   * Bug: only flattens one level
   * @param arr Nested array
   * @returns Flattened array
   */
  flatten<T>(arr: T[][]): T[] {
    return arr.reduce((acc, val) => acc.concat(val), []);
  }
}
