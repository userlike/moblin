import { ReactNode, useMemo } from 'react';
import { useCallback as useCallbackReact, useRef as useRefReact } from 'react';

export interface RafObject<T> {
  current: T | null;
  get: RafGetter<T>;
  set: RafCallback<T>;
}

export interface RafGetter<T> {
  (): T | null;
}

export interface RafCallback<T> {
  (v: T | null): void;
}

export function useRefVar<T>(defaultValue: T): { current: T } {
  return useRefReact(defaultValue);
}

export function useRef<T = HTMLElement>(
  defaultValue: T | null = null
): RafObject<T> {
  const sourceOfTruth = useRefReact(defaultValue);
  return useMemo(
    () => ({
      get current(): T | null {
        return sourceOfTruth.current;
      },
      set current(v: T | null) {
        sourceOfTruth.current = v;
      },
      get() {
        return sourceOfTruth.current;
      },
      set(v: T | null) {
        sourceOfTruth.current = v;
      },
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );
}

export function createRef<T>(defaultValue: T | null = null): RafObject<T> {
  const sourceOfTruth: { current: T | null } = { current: defaultValue };
  return {
    get current(): T | null {
      return sourceOfTruth.current;
    },
    set current(v: T | null) {
      sourceOfTruth.current = v;
    },
    get() {
      return sourceOfTruth.current;
    },
    set(v: T | null) {
      sourceOfTruth.current = v;
    },
  };
}

export const useCallback: <T extends (...args: never[]) => unknown>(
  callback: T,
  deps: Array<unknown>
) => T = useCallbackReact;

export interface WithClassName {
  className?: string;
}

export interface WithChildren {
  children?: ReactNode;
}
