import type { NextPage, NextPageContext } from "next";
import Head from "next/head";
import { initializeStore, injectServerSideStore } from "@store";
import { CommonPageTemplate } from "@features/common";
import { ItemsList } from "@features/items";
import { useCalculateRemainingHeight } from "@lib/hooks";

const Home: NextPage = () => {
  const {
    refs: [headerRef, navRef],
    remainingHeight,
  } = useCalculateRemainingHeight(2);

  return (
    <div>
      <Head>
        <title>Auction</title>
        <meta name="description" content="Fast auction app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <CommonPageTemplate refs={{ headerRef, navRef }}>
        <ItemsList height={remainingHeight} />
      </CommonPageTemplate>
    </div>
  );
};

export async function getServerSideProps(ctx: NextPageContext) {
  const store = initializeStore();

  await store.me.fetchMe(ctx);
  await store.itemsStore.fetchItems();

  return injectServerSideStore(store);
}

export default Home;
