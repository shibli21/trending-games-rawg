import type { NextPage } from "next";
import Head from "next/head";
import { Banner } from "../components/Banner";

const Home: NextPage = () => {
  return (
    <div className="container mx-auto">
      <Head>
        <title>Coffind</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Banner />
      </main>
    </div>
  );
};

export default Home;
