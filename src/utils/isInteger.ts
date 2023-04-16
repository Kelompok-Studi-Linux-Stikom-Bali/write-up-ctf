export function isInteger(str: string): boolean {
  return typeof str === 'string' && /^\d+$/.test(str);
}
