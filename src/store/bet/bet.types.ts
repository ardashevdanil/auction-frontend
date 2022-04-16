import type { Instance, SnapshotIn } from "mobx-state-tree";
import { BetModel } from "./bet";

export type BetType = Instance<typeof BetModel>;
export type BetSnapshotType = SnapshotIn<typeof BetModel>;
