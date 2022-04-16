import { types } from "mobx-state-tree";

export const ImageModel = types.model({
  id: types.number,
  attributes: types.model({
    name: types.string,
    width: types.number,
    height: types.number,
    url: types.string,
    createdAt: types.string,
    updatedAt: types.string,
  }),
});
