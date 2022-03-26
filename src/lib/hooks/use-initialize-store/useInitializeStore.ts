import { useMemo } from "react";

import { initializeStore } from "@store";
import type { RootStoreSnapshotType } from "@store/root-store";

export function useInitializeStore(initialState: RootStoreSnapshotType) {
  return useMemo(() => initializeStore(initialState), [initialState]);
}
