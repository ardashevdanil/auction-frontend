import type { Instance } from "mobx-state-tree";
import { Me } from "./me";

export type MeType = Instance<typeof Me>;
