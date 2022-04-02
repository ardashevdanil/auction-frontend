import { types, flow } from "mobx-state-tree";
import { logger } from "@lib/logger";
import { Session } from "next-auth";
import { NextPageContext } from "next";
import { getSession } from "next-auth/client";
import { http } from "@lib/http";

const MeModel = types
  .model({
    id: types.maybeNull(types.number),
    name: types.optional(types.string, ""),
    email: types.optional(types.string, ""),
    image: types.optional(types.string, ""),
    jwt: types.maybeNull(types.string),
    expires: types.maybeNull(types.string),
  })
  .views((self) => ({
    get namePlusId() {
      return self.id + self.name;
    },
  }))
  .actions((self) => {
    function setMe(data: Session) {
      self.id = (data.id as number) ?? null;
      self.jwt = (data.jwt as string) ?? null;
      self.expires = data.expires ?? null;
      self.name = data.user?.name ?? "";
      self.email = data.user?.email ?? "";
      self.image = data.user?.image ?? "";
    }

    const fetchMe = flow(function* fetchMe(ctx: NextPageContext) {
      try {
        const session = yield getSession(ctx);
        if (session) {
          setMe(session);
          http.setHeader("Authorization", `Bearer ${session.jwt}`);
        }
      } catch (err) {
        logger.me("Fetch me error", err);
      }
    });

    return {
      setMe,
      fetchMe,
    };
  });

export const Me = types.optional(MeModel, {
  id: null,
  name: "",
  email: "",
  image: "",
  jwt: null,
  expires: null,
});
