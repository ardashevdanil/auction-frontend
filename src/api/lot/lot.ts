import { http } from "@lib/http";
import type { LotFindQueryParams } from "./lot.types";

function findOne(id: string | number) {
  return http.request({
    url: `/items/${id}`,
  });
}

function find(params: LotFindQueryParams) {
  return http.request({
    url: "/items",
    params,
  });
}

export const lotApi = {
  findOne,
  find,
};
