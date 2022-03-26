import { types } from "mobx-state-tree";
import { User } from "../user";
import { Lot } from "../lot";

export const RootStore = types.model({
  user: User,
  lots: types.map(Lot),
});
