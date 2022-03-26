import { types } from "mobx-state-tree";
import { User } from "../user";
import { Lot } from "../lot";

export const Root = types.model({
  user: types.optional(User, {}),
  lots: types.map(Lot),
});
