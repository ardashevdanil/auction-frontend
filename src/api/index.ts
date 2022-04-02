import { userApi } from "./user";
import { lotApi } from "./lot";
import { meApi } from "./me";

export const api = {
  user: userApi,
  lot: lotApi,
  me: meApi,
};

export type { StrapiQueryFilters } from "./types";
