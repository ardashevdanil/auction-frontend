import { Instance, SnapshotIn } from "mobx-state-tree";
import type { RootStore } from "./root-store";

export type RootStoreType = Instance<typeof RootStore>;
export type RootStoreSnapshotType = SnapshotIn<typeof RootStore>;
