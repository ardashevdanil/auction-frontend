import { types } from "mobx-state-tree";
import { ImageModel } from "../image";
import { BetModel } from "../bet";

export const ItemModel = types
  .model({
    id: types.number,
    attributes: types.model({
      title: types.string,
      description: types.maybeNull(types.string),
      start_bet: types.optional(types.number, 0),
      min_step: types.optional(types.number, 0),
      images: types.model({
        data: types.array(ImageModel),
      }),
      bets: types.model({
        data: types.array(BetModel),
      }),
    }),
  })
  .views((self) => ({
    get maxBet() {
      const { start_bet, bets } = self.attributes;
      const maxBet = bets.data
        .slice()
        .sort(
          (bet1, bet2) => bet2.attributes.amount - bet1.attributes.amount
        )[0];

      return maxBet?.attributes.amount || start_bet;
    },
    get betCount() {
      return self.attributes.bets.data.length;
    },
    get firstImageUrl() {
      return self.attributes.images.data[0]?.attributes.url || "";
    },
  }));
