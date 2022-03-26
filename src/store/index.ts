import { applySnapshot, getSnapshot } from "mobx-state-tree";

import { Root } from "./root";
import type { RootType } from "./root";

let store: RootType;

export function initializeStore(snapshot?: string) {
  const _store: RootType =
    store ??
    Root.create({
      lots: {},
    });

  if (snapshot) {
    applySnapshot(_store, snapshot);
  }

  if (typeof window === "undefined") {
    return _store;
  }

  return store || _store;
}

export function injectServerSideStore<T = Object>(store: RootType, props?: T) {
  return {
    props: {
      ...(props || {}),
      initialState: getSnapshot(store),
    },
  };
}
