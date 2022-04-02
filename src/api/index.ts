import { itemsApi } from "./items";
import { meApi } from "./me";

export const api = {
  items: itemsApi,
  me: meApi,
};

export type {
  StrapiQueryFilters,
  CommonResData,
  ResMetaData,
  ResPaginationData,
} from "./types";
