import { useCallback, useRef } from "react";

const useDebounce = (callback: Function, delay: number) => {
  const timeoutId = useRef<NodeJS.Timeout | null>(null);

  return useCallback(
    (...args: any[]) => {
      if (timeoutId.current) {
        clearTimeout(timeoutId.current);
      }
      timeoutId.current = setTimeout(() => callback(...args), delay);
    },
    [callback, delay]
  );
};

export default useDebounce;
