import type { Instance } from "mobx-state-tree";
import { MeModel } from "./me";

export type MeType = Instance<typeof MeModel>;
