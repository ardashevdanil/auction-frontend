import { useMemo } from "react";

import { initializeStore } from "@store";
import type { RootType } from "@store/root";

export function useInitializeStore(initialState: RootType) {
  return useMemo(() => initializeStore(initialState), [initialState]);
}
