export function truncate(input: string, maxLen: number, suffix = '...'): string {
  if (input.length <= maxLen) return input;
  return input.slice(0, Math.max(0, maxLen - suffix.length)) + suffix;
}
