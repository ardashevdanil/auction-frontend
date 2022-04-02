import { types } from "mobx-state-tree";

export const Item = types
  .model({
    id: types.number,
    title: types.string,
    description: types.string,
    startBet: types.optional(types.number, 0),
    minStep: types.optional(types.number, 0),
  })
  .views((self) => ({
    get priceX100() {
      return self.startBet * 100;
    },
  }));
