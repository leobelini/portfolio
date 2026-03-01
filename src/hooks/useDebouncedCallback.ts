import { useRef, useCallback } from "react";

const useDebouncedCallback = <T extends Function>(func:T, wait:number) => {
  const timeout = useRef<number>();

  return useCallback(
    (...args: any) => {
      const later = () => {
        clearTimeout(timeout.current);
        func(...args);
      };

      clearTimeout(timeout.current);
      timeout.current = setTimeout(later, wait);
    },
    [func, wait]
  );
}

export {useDebouncedCallback}