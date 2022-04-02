import { userApi } from "./user";
import { lotApi } from "./lot";

export const api = {
  user: userApi,
  lot: lotApi,
};

export type { StrapiQueryFilters } from "./types";
