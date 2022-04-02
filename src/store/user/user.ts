import { types } from "mobx-state-tree";

const UserModel = types
  .model({
    id: types.optional(types.string, ""),
    name: types.optional(types.string, ""),
  })
  .views((self) => ({
    get namePlusId() {
      return self.id + self.name;
    },
  }))
  .actions((self) => ({
    setName(name: string) {
      self.name = name;
    },
  }));

export const User = types.optional(UserModel, {});
