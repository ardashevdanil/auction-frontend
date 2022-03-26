import { useContext } from "react";
import { MobXProviderContext } from "mobx-react";

import type { RootType } from "@store/root";

export function useStore() {
  const { store } = useContext(MobXProviderContext) as { store: RootType };

  return store;
}
