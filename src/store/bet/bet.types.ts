import type { Instance, SnapshotIn } from "mobx-state-tree";
import { Bet } from "./bet";

export type BetType = Instance<typeof Bet>;
export type BetSnapshotType = SnapshotIn<typeof Bet>;
