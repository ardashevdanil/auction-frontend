import { useContext } from "react";
import { MobXProviderContext } from "mobx-react";

import type { RootStoreType } from "@store/root-store";

export function useStore() {
  const { store } = useContext(MobXProviderContext) as { store: RootStoreType };

  return store;
}
