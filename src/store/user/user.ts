import { types, flow } from "mobx-state-tree";
import { userApiMock } from "@api/user";
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
        const {
          data: { id, name },
        } = yield userApiMock.get();

        self.id = id;
        self.name = name;
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
