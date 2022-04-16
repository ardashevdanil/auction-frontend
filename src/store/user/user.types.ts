import type { Instance } from "mobx-state-tree";
import { UserModel } from "./user";

export type UserType = Instance<typeof UserModel>;
