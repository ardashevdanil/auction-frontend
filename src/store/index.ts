import { applySnapshot, getSnapshot } from "mobx-state-tree";

import { RootStore } from "./root-store";
import type { RootStoreType, RootStoreSnapshotType } from "./root-store";

let store: RootStoreType;

export function initializeStore(snapshot?: RootStoreSnapshotType) {
  const _store: RootStoreType = store ?? RootStore.create();

  if (snapshot) {
    applySnapshot(_store, snapshot);
  }

  if (typeof window === "undefined") {
    return _store;
  }

  return store || _store;
}

export function injectServerSideStore<T = object>(
  store: RootStoreType,
  props?: T
) {
  return {
    props: {
      ...(props || {}),
      initialState: getSnapshot(store),
    },
  };
}
