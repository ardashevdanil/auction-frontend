import { useRef, useEffect, useState } from "react";
import type { RefObject } from "react";

export function useCalculateRemainingHeight(refsLenght: number) {
  const [remainingHeight, setRemainingHeight] = useState(700);
  const refs = useRef<RefObject<HTMLDivElement>[]>(
    new Array(refsLenght).fill({ current: null })
  );

  useEffect(() => {
    if (refs.current?.every((ref) => ref.current)) {
      const height = refs.current.reduce(
        (acc, ref) => acc - (ref.current?.offsetHeight || 0),
        window.innerHeight
      );

      setRemainingHeight(height);
    }
  }, []);

  return {
    refs: refs.current,
    remainingHeight,
  };
}
