import type { CommonResData } from "@api";
import type { ItemSnapshotType } from "@store/item";

export type ItemData = {
  id: number;
  attributes: {
    title: string;
    description: string;
    start_bet?: number;
    min_step?: number;
  };
};

export type ItemsData = ItemData[];

export type ItemResData = CommonResData<ItemData>;

export type ItemsResData = CommonResData<ItemsData>;

export type ItemSerializerOutput = {
  id: number;
} & ItemSnapshotType;

export type ItemsSerializerOutput = ItemSerializerOutput[];
