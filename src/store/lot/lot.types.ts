import type { Instance } from "mobx-state-tree";
import { Lot } from "./lot";

export type LotType = Instance<typeof Lot>;
