import type { Instance, SnapshotIn } from "mobx-state-tree";
import { ItemsFiltersModel, ItemsStoreModel } from "./items-store";

export type ItemsStoreType = Instance<typeof ItemsStoreModel>;
export type ItemsStoreSnapshotType = SnapshotIn<typeof ItemsStoreModel>;
export type ItemsFiltersSnapshotType = SnapshotIn<typeof ItemsFiltersModel>;
