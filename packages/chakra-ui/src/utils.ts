export function unsafeCoerce<T>(x: unknown): T {
  return x as T;
}
