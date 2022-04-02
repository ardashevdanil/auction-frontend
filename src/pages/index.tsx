import type { NextPage, NextPageContext } from "next";
import Head from "next/head";
import { initializeStore, injectServerSideStore } from "@store";
import { CommonPageTemplate } from "@features/common";
import { ItemList } from "features/item-list";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Auction</title>
        <meta name="description" content="Fast auction app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <CommonPageTemplate>
        <ItemList />
      </CommonPageTemplate>
    </div>
  );
};

export async function getServerSideProps(ctx: NextPageContext) {
  const store = initializeStore();
  await store.user.fetchUser();
  await store.me.fetchMe(ctx);

  return injectServerSideStore(store);
}

export default Home;
