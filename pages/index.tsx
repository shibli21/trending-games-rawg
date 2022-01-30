import type { GetStaticProps, InferGetStaticPropsType } from "next";
import Head from "next/head";
import { useContext } from "react";
import { Banner } from "../components/Banner";
import Container from "../components/Container";
import GameCard from "../components/GameCard";
import { fetchGames } from "../lib/game";
import { SearchContext } from "./_app";

const Home: InferGetStaticPropsType<typeof getStaticProps> = (props: { games: { results: any[] } }) => {
  const { state } = useContext(SearchContext);

  return (
    <Container>
      <Head>
        <title>TRENDING</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Banner />
        {state && (
          <h1 className="text-2xl">
            Search result for <span className="text-orange-500">{state}</span>
          </h1>
        )}
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
    </Container>
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
