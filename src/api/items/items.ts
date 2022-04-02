import { http } from "@lib/http";
import type { ItemsFindQueryParams } from "./items.types";

function findOne<T>(id: string | number) {
  return http.request<T>({
    url: `/items/${id}`,
  });
}

function find<T>(params?: ItemsFindQueryParams) {
  return http.request<T>({
    url: "/items",
    params,
  });
}

export const itemsApi = {
  findOne,
  find,
};
