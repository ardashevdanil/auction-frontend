import type { Instance, SnapshotIn } from "mobx-state-tree";
import { PaginationModel } from "./pagination";

export type PaginationType = Instance<typeof PaginationModel>;
export type PaginationSnapshotType = SnapshotIn<typeof PaginationModel>;
