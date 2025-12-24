import { Calculator } from './calculator';
import { StringUtils } from './stringUtils';
import { ArrayUtils } from './arrayUtils';

/**
 * Main application entry point
 * Demonstrates usage of utility classes
 */
function main(): void {
  console.log('=== AI Testing Project ===\n');

  // Calculator demonstrations
  const calc = new Calculator();
  console.log('Calculator:');
  console.log('  10 + 5 =', calc.add(10, 5));
  console.log('  10 - 5 =', calc.subtract(10, 5));
  console.log('  10 * 5 =', calc.multiply(10, 5));
  console.log('  10 / 5 =', calc.divide(10, 5));
  console.log('  2 ^ 3 =', calc.power(2, 3));
  console.log('  sqrt(16) =', calc.squareRoot(16));
  console.log('  5! =', calc.factorial(5));
  console.log('  Is 17 prime?', calc.isPrime(17));
  console.log();

  // String utilities demonstrations
  const strUtils = new StringUtils();
  console.log('String Utilities:');
  console.log('  Reverse "hello" =', strUtils.reverse('hello'));
  console.log('  Capitalize "world" =', strUtils.capitalize('world'));
  console.log('  Is "racecar" palindrome?', strUtils.isPalindrome('racecar'));
  console.log('  Vowels in "beautiful" =', strUtils.countVowels('beautiful'));
  console.log('  Truncate "This is a long string" (10) =', strUtils.truncate('This is a long string', 10));
  console.log();

  // Array utilities demonstrations
  const arrUtils = new ArrayUtils();
  console.log('Array Utilities:');
  console.log('  Max of [1, 5, 3, 9, 2] =', arrUtils.max([1, 5, 3, 9, 2]));
  console.log('  Min of [1, 5, 3, 9, 2] =', arrUtils.min([1, 5, 3, 9, 2]));
  console.log('  Average of [1, 2, 3, 4, 5] =', arrUtils.average([1, 2, 3, 4, 5]));
  console.log('  Remove duplicates [1, 2, 2, 3, 3, 3] =', arrUtils.removeDuplicates([1, 2, 2, 3, 3, 3]));
  console.log('  Chunk [1, 2, 3, 4, 5, 6] by 2 =', arrUtils.chunk([1, 2, 3, 4, 5, 6], 2));
}

// Run main if this is the entry point
if (require.main === module) {
  main();
}

export { Calculator, StringUtils, ArrayUtils };
