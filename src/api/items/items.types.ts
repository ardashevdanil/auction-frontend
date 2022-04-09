import type { AxiosResponse } from "axios";
import type { ItemSnapshotType } from "@store/item";
import type { CommonResData, StrapiQueryParams } from "../types";

export type ItemsFieldsUnion =
  | "title"
  | "images"
  | "description"
  | "start_bet"
  | "min_step"
  | "user"
  | "category"
  | "bets"
  | "questions";

export type ItemsFindQueryParams = StrapiQueryParams<ItemsFieldsUnion>;

type ItemResData = CommonResData<ItemSnapshotType>;
type ItemsResData = CommonResData<ItemSnapshotType[]>;

export type ItemResponse = AxiosResponse<ItemResData>;
export type ItemsResponse = AxiosResponse<ItemsResData>;
