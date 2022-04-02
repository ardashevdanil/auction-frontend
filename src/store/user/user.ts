import { types, flow } from "mobx-state-tree";
import { api } from "@api";
import { logger } from "@lib/logger";

const UserModel = types
  .model({
    id: types.optional(types.string, ""),
    name: types.optional(types.string, ""),
    state: types.enumeration("State", ["idle", "pending", "error"]),
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
    fetchUser: flow(function* fetchUser() {
      self.state = "pending";

      try {
        const { data } = yield api.lot.findOne(1);

        logger.user("Fetch success", data);
        self.state = "idle";
      } catch (err) {
        logger.user("Fetch user error", err);
        self.state = "error";
      }
    }),
  }));

export const User = types.optional(UserModel, {
  state: "idle",
});
