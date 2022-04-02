import debug from "debug";

export const logger = {
  httpReq: debug("http:req"),
  httpRes: debug("http:res"),
  items: debug("items"),
  me: debug("me"),
};
