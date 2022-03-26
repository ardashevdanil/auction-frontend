import type { NextPage } from "next";
import Head from "next/head";
import { initializeStore, injectServerSideStore } from "@store";
import { Header } from "@features/navigation";
import { ItemList } from "features/item-list";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Auction</title>
        <meta name="description" content="Fast auction app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="px-8 md:container mx-auto">
        <Header />
        <ItemList />
      </main>
    </div>
  );
};

export async function getServerSideProps() {
  const store = initializeStore();

  await store.user.fetchUser();

  return injectServerSideStore(store);
}

export default Home;
