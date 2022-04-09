import { itemsApi } from "./items";
import { meApi } from "./me";

export type { ItemResponse, ItemsResponse } from "./items";
export type {
  StrapiQueryFilters,
  CommonResData,
  ResMetaData,
  ResPaginationData,
} from "./types";

export const api = {
  items: itemsApi,
  me: meApi,
};
