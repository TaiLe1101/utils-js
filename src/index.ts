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
