import type { StrapiQueryFilters } from "../types";

export type LotFindQueryParams = {
  title?: StrapiQueryFilters;
  desctiption?: StrapiQueryFilters;
  start_bet?: StrapiQueryFilters;
  min_step?: StrapiQueryFilters;
  expired_at?: StrapiQueryFilters;
};
