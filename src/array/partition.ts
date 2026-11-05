export function partition<T>(items: readonly T[], predicate: (item: T) => boolean): [T[], T[]] {
  const pass: T[] = [];
  const fail: T[] = [];
  for (const item of items) (predicate(item) ? pass : fail).push(item);
  return [pass, fail];
}
