import { types } from "mobx-state-tree";

import type { PaginationSnapshotType } from "./pagination.types";

export const PaginationModel = types
  .model({
    page: types.number,
    pageSize: types.number,
    pageCount: types.number,
    total: types.number,
  })
  .actions((self) => ({
    incPage() {
      self.page += 1;
    },
  }));
