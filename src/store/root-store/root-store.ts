import { types } from "mobx-state-tree";
import { User } from "../user";
import { Lot } from "../lot";
import { Me } from "../me";

export const RootStore = types.model({
  user: User,
  lots: types.map(Lot),
  me: Me,
});
