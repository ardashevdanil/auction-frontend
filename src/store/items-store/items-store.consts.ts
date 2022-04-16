import type {
  ItemsStoreSnapshotType,
  ItemsFiltersSnapshotType,
} from "./items-store.types";
import type { PaginationSnapshotType } from "@store/pagination";

export const INITIAL_ITEMS_PAGINATION: PaginationSnapshotType = {
  page: 1,
  pageSize: 7,
  pageCount: 1,
  total: 0,
};

export const INITIAL_ITEMS_FILTERS: ItemsFiltersSnapshotType = {
  title: "",
};

export const INITIAL_ITEMS_STORE: ItemsStoreSnapshotType = {
  items: [],
  filters: INITIAL_ITEMS_FILTERS,
  pagination: INITIAL_ITEMS_PAGINATION,
  state: "idle",
};
