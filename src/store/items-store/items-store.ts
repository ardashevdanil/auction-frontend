import { types, flow } from "mobx-state-tree";
import { api } from "@api";
import { logger } from "@lib/logger";
import { itemsSerializer } from "@serializers/items";
import type { ItemsResData } from "@serializers/items";

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
        const { data } = yield api.items.find<ItemsResData>();

        self.items.push(...itemsSerializer(data));
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
