import { types } from "mobx-state-tree";

export const Bet = types.model({
  id: types.number,
  attributes: types.model({
    amount: types.number,
    is_buyout: types.boolean,
    createdAt: types.string,
    updatedAt: types.string,
  }),
});
