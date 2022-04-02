import type { NextPage, NextPageContext } from "next";
import Head from "next/head";
import { initializeStore, injectServerSideStore } from "@store";
import { CommonPageTemplate } from "@features/common";
import { ItemList } from "features/item-list";
import { getSession, signIn, useSession } from "next-auth/client";

const Home: NextPage = () => {
  const session = useSession();

  console.log("session!: ", session);
  return (
    <div>
      <Head>
        <title>Auction</title>
        <meta name="description" content="Fast auction app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <CommonPageTemplate>
        <button onClick={() => signIn()}>Sign In With Google</button>
        <ItemList />
      </CommonPageTemplate>
    </div>
  );
};

export async function getServerSideProps({ req }: NextPageContext) {
  const store = initializeStore();

  const session = await getSession({ req });

  await store.user.fetchUser();

  return injectServerSideStore(store, { session });
}

export default Home;
