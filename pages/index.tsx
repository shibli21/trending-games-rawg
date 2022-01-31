import type { GetStaticProps, InferGetStaticPropsType } from "next";
import Head from "next/head";
import { useContext, useEffect, useState } from "react";
import { Banner } from "../components/Banner";
import Container from "../components/Container";
import GameCard from "../components/GameCard";
import { fetchGames, fetchSearchedGames } from "../lib/game";
import { SearchContext } from "./_app";

const Home: InferGetStaticPropsType<typeof getStaticProps> = (props: { games: { results: any[] } }) => {
  const { state } = useContext(SearchContext);
  const [searchedGames, setSearchedGames] = useState<any>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    setIsLoading(true);
    if (state) {
      fetchSearchedGames(state).then((res) => {
        setSearchedGames(res);
        setIsLoading(false);
      });
    }
  }, [state]);

  return (
    <Container>
      <Head>
        <title>TRENDING</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Banner />
        {state && searchedGames && (
          <div>
            <h1 className="text-2xl mb-10">
              Search result for <span className="text-orange-500">{state}</span>
            </h1>
            {isLoading ? (
              <div className="flex justify-center my-10 h-10">
                <div className="w-10 h-10 border-4 border-top-color:transparent border-orange-600 border-dashed  rounded-full animate-spin"></div>
              </div>
            ) : (
              <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 gap-5 mb-20 ">
                {searchedGames &&
                  searchedGames.results?.map((game: any) => (
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
            )}
          </div>
        )}
        <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 gap-5">
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
