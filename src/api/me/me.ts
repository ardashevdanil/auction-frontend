import { http } from "@lib/http";

function get() {
  return http.request({
    url: "/users/me",
  });
}

export const meApi = {
  get,
};
