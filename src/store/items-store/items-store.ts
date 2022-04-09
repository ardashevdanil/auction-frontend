import { types, flow } from "mobx-state-tree";
import { api } from "@api";
import { logger } from "@lib/logger";
import type { ItemsResponse } from "@api";

import { Item } from "../item";

const ItemsStoreModel = types
  .model({
    items: types.array(Item),
    state: types.enumeration("State", ["idle", "pending", "error"]),
  })
  .actions((self) => {
    const fetchItems = flow(function* fetchItems() {
      self.state = "pending";

      try {
        const { data }: ItemsResponse = yield api.items.find({
          populate: ["images", "bets"],
        });

        self.items.push(...data.data);
        self.state = "idle";
      } catch (err) {
        logger.items("Fetch items error", err);
        self.state = "error";
      }
    });

    return {
      fetchItems,
    };
  });

export const ItemsStore = types.optional(ItemsStoreModel, {
  items: [],
  state: "idle",
});
