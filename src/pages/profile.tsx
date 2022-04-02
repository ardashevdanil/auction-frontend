import type { NextPage, NextPageContext } from "next";
import Head from "next/head";
import { CommonPageTemplate } from "@features/common";
import { initializeStore, injectServerSideStore } from "@store";
import { useSession } from "next-auth/client";

const Profile: NextPage = () => {
  const [session] = useSession();
  return (
    <div>
      <Head>
        <title>Auction - Profile</title>
        <meta name="description" content="Fast auction app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <CommonPageTemplate>
        {session?.user ? "Auth" : "No auth"}
      </CommonPageTemplate>
    </div>
  );
};

export const getServerSideProps = async (ctx: NextPageContext) => {
  const store = initializeStore();
  await store.me.fetchMe(ctx);
  return injectServerSideStore(store);
};

export default Profile;
