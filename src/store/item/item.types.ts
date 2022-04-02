import type { Instance, SnapshotIn } from "mobx-state-tree";
import { Item } from "./item";

export type ItemType = Instance<typeof Item>;
export type ItemSnapshotType = SnapshotIn<typeof Item>;
