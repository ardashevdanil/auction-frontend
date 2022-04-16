import type { Instance, SnapshotIn } from "mobx-state-tree";
import { ItemModel } from "./item";

export type ItemType = Instance<typeof ItemModel>;
export type ItemSnapshotType = SnapshotIn<typeof ItemModel>;
