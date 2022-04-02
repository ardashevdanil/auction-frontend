import type { Instance } from "mobx-state-tree";
import { ItemsStore } from "./items-store";

export type ItemsStoreType = Instance<typeof ItemsStore>;
