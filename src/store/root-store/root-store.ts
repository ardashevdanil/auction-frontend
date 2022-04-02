import { types } from "mobx-state-tree";
import { ItemsStore } from "../items-store";

export const RootStore = types.model({
  itemsStore: ItemsStore,
});
