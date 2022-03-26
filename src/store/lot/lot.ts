import { types } from "mobx-state-tree";
import { User } from "../user";
import type { UserType } from "../user";

export const Lot = types
  .model({
    name: types.optional(types.string, ""),
    price: types.optional(types.number, 0),
    user: types.reference(User),
  })
  .views((self) => ({
    get priceX100() {
      return self.price * 100;
    },
  }))
  .actions((self) => ({
    setName(name: string) {
      self.name = name;
    },
    setUser(user: UserType) {
      self.user = user;
    },
  }));
