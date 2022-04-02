import { types } from "mobx-state-tree";
import { ItemsStore } from "../items-store";
import { Me } from "../me";

export const RootStore = types.model({
  itemsStore: ItemsStore,
  me: Me,
});
