import { itemsApi } from "./items";

export const api = {
  items: itemsApi,
};

export type {
  StrapiQueryFilters,
  CommonResData,
  ResMetaData,
  ResPaginationData,
} from "./types";
