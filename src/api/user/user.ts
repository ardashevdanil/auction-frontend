import { http } from "@lib/http";

function get() {
  return http.request({
    url: "/user",
  });
}

function patch() {
  return http.request({
    url: "/user",
    method: "patch",
  });
}

export const userApi = {
  get,
  patch,
};
