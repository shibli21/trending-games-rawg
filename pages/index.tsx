import type { GetStaticProps, InferGetStaticPropsType } from "next";
import Head from "next/head";
import { Banner } from "../components/Banner";
import GameCard from "../components/GameCard";
import { fetchGames } from "../lib/game";

const Home: InferGetStaticPropsType<typeof getStaticProps> = (props: { games: { results: any[] } }) => {
  console.log(props.games);

  return (
    <div className="container mx-auto">
      <Head>
        <title>TRENDING</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Banner />
        <div className="grid    lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 gap-5">
          {props.games &&
            props.games.results?.map((game: any) => (
              <GameCard
                key={game.id}
                id={game.id}
                name={game.name}
                genres={game.genres}
                rating={game.rating}
                slug={game.slug}
                imgUrl={game.background_image}
              />
            ))}
        </div>
      </main>
    </div>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async (context) => {
  const games = await fetchGames();

  return {
    props: {
      games,
    },
  };
};
