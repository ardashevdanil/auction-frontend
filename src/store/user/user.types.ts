import type { Instance } from "mobx-state-tree";
import { User } from "./user";

export type UserType = Instance<typeof User>;
