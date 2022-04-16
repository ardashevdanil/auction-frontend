import { types, flow } from "mobx-state-tree";
import { api } from "@api";
import { logger } from "@lib/logger";
import type { ItemsResponse } from "@api";

import { ItemModel } from "../item";
import {
  INITIAL_ITEMS_STORE,
  INITIAL_ITEMS_FILTERS,
  INITIAL_ITEMS_PAGINATION,
} from "./items-store.consts";
import { PaginationModel } from "../pagination";

import type { ItemsFiltersSnapshotType } from "./items-store.types";
import type { PaginationSnapshotType } from "../pagination";

export const ItemsFiltersModel = types.model({
  title: types.string,
});

export const ItemsStoreModel = types
  .model({
    items: types.array(ItemModel),
    filters: ItemsFiltersModel,
    pagination: PaginationModel,
    state: types.enumeration("State", ["idle", "pending", "error"]),
  })
  .actions((self) => {
    const fetchItems = flow(function* fetchItems() {
      self.state = "pending";

      try {
        const { data }: ItemsResponse = yield api.items.find({
          populate: ["images", "bets"],
          pagination: self.pagination,
          filters: {
            title: {
              $containsi: self.filters.title,
            },
          },
        });
        logger.items(data.meta);

        self.items.push(...data.data);

        if (data.meta?.pagination) {
          Object.assign(self.pagination, data.meta.pagination);
        }

        self.state = "idle";
      } catch (err) {
        logger.items("Fetch items error", err);
        self.state = "error";
      }
    });

    function setFilters(filters: ItemsFiltersSnapshotType) {
      self.filters = filters;
    }

    function clearFilters() {
      self.filters = INITIAL_ITEMS_FILTERS;
    }

    function clearPagination() {
      Object.assign(self.pagination, INITIAL_ITEMS_PAGINATION);
    }

    return {
      fetchItems,
      setFilters,
      clearFilters,
      clearPagination,
    };
  });

export const ItemsStore = types.optional(ItemsStoreModel, INITIAL_ITEMS_STORE);
