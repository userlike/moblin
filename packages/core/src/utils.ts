export function unsafeCoerce<T>(x: unknown): T {
  return x as T;
}

declare const process: {
  env: {
    NODE_ENV: string|undefined,
  }
};

export const __DEV__ = process.env.NODE_ENV !== 'production';
