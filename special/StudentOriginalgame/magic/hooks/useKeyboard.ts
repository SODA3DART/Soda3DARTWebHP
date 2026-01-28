
import { useEffect, useRef, useCallback, useMemo } from 'react';

export const useKeyboard = () => {
  const keyMap = useRef<Map<string, boolean>>(new Map());

  const setKey = useCallback((code: string, isPressed: boolean) => {
    keyMap.current.set(code, isPressed);
  }, []);

  const reset = useCallback(() => {
    keyMap.current.clear();
  }, []);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      keyMap.current.set(event.code, true);
    };

    const onKeyUp = (event: KeyboardEvent) => {
      keyMap.current.set(event.code, false);
    };

    window.addEventListener('keydown', onKeyDown);
    window.addEventListener('keyup', onKeyUp);

    return () => {
      window.removeEventListener('keydown', onKeyDown);
      window.removeEventListener('keyup', onKeyUp);
      keyMap.current.clear();
    };
  }, []);

  // Return the map getter, setter, and reset function, memoized for stability
  return useMemo(() => ({ 
    get: (code: string) => keyMap.current.get(code) || false,
    setKey,
    reset
  }), [setKey, reset]);
};
