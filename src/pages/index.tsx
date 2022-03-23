import type { NextPage } from "next";
import Head from "next/head";
import { Header } from "@ui";
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

export default Home;
