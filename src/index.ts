export function sayHello(name: string): string {
  return `Hello, ${name}!`;
}

/**
 * Formats a number as a string using the user's locale.
 * @param value The number to format.
 * @returns The formatted number string.
 */
export function formatNumber(value: number): string {
  return new Intl.NumberFormat().format(value);
}

/**
 * Adds two numbers.
 * @param a The first number.
 * @param b The second number.
 * @returns The sum of the two numbers.
 */
export function add(a: number, b: number): number {
  return a + b;
}

/**
 * Subtracts two numbers.
 * @param a The first number.
 * @param b The second number.
 * @returns The difference of the two numbers.
 */
export function subtract(a: number, b: number): number {
  return a - b;
}
