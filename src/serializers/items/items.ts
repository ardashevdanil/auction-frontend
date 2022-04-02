import type {
  ItemResData,
  ItemsResData,
  ItemSerializerOutput,
  ItemsSerializerOutput,
} from "./items.types";

export function itemSerializer(resData: ItemResData): ItemSerializerOutput {
  const { attributes, id } = resData.data;

  return {
    id,
    title: attributes?.title,
    description: attributes?.description,
    startBet: attributes?.start_bet,
    minStep: attributes?.min_step,
  };
}

export function itemsSerializer(resData: ItemsResData): ItemsSerializerOutput {
  return resData.data.map((data) => itemSerializer({ data }));
}
