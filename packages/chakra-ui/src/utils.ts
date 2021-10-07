export function unsafeCoerce<T>(x: unknown): T {
  return x as T;
}

export const __DEV__ = process.env.NODE_ENV !== 'production';
