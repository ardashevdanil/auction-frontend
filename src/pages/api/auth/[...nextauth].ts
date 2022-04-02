import NextAuth, { Account, Session, User } from "next-auth";
import Providers from "next-auth/providers";
import { JWT } from "next-auth/jwt";
import { NextApiRequest, NextApiResponse } from "next";

const options = {
  providers: [
    Providers.Google({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  database: process.env.NEXT_PUBLIC_DATABASE_URL,
  callbacks: {
    async session(session: Session, user: User) {
      session.jwt = user.jwt;
      session.id = user.id;
      return session;
    },
    async jwt(token: JWT, _: Session, account: Account) {
      if (account) {
        const url = new URL(
          `${process.env.NEXT_PUBLIC_HOST}/auth/${account.provider}/callback`
        );
        url.searchParams.set("access_token", account.accessToken);
        const response = await fetch(url.toString());
        const data = await response.json();
        token.jwt = data.jwt;
        token.id = data.user.id;
      }
      return token;
    },
  },
};

const Auth = (req: NextApiRequest, res: NextApiResponse) =>
  // @ts-ignore
  NextAuth(req, res, options);

export default Auth;
