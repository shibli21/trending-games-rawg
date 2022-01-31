import { Tab } from "@headlessui/react";
import { ArrowLeftIcon, StarIcon } from "@heroicons/react/solid";
import moment from "moment";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import Container from "../../components/Container";
import { getGenres, getPlatform, getPublishers } from "../../lib/formatter";
import { fetchGameDetails, fetchGameDLC, fetchGameReviews, fetchGameSS, fetchGameTrailer } from "../../lib/game";

interface Props {}
function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}

const Game: InferGetServerSidePropsType<typeof getServerSideProps> = (props: any) => {
  const router = useRouter();
  const { game, gameSS, gameDlc, gameTrailers, gameGameReviews } = props;

  return (
    <Container>
      <Head>
        <title>{game?.name}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="py-2">
        <Link href="/" passHref>
          <ArrowLeftIcon className=" h-8 cursor-pointer w-8 text-orange-700" />
        </Link>
      </div>
      <div className="container rounded-xl">
        <div className="shadow shadow-orange-700">
          {game?.background_image && (
            <Image
              layout="responsive"
              className=" object-cover w-full duration-200 ease-in h-60 hover:scale-105"
              src={game?.background_image}
              width={550}
              height={250}
              alt={game?.background_image}
            />
          )}
        </div>
      </div>
      <div className="pt-4">
        <h1 className="font-sans text-2xl font-semibold ">{game?.name}</h1>
        <h1 className="font-light text-gray-600">
          <span>Released</span> {game?.released}
        </h1>

        <div className="grid grid-cols-8  gap-10  px-2 py-4 md:py-16 sm:px-0">
          <div className="col-span-8  lg:col-span-2">
            <div className="p-4 shadow shadow-orange-900 bg-gray-800 ">
              {game?.genres && <DescItem title="Genre" value={getGenres(game.genres)} />}
              {game?.released && <DescItem title="Release" value={moment(game.released).format("DD/MM/YYYY")} />}
              {game?.publishers && <DescItem title="Company" value={getPublishers(game.publishers)} />}
              {game?.esrb_rating?.name && <DescItem title="Age Rating" value={game.esrb_rating?.name} />}
              {game?.parent_platforms && <DescItem title="Platforms" value={getPlatform(game.parent_platforms)} />}
              {game?.reddit_name && <DescItem title="Reddit" value={game.reddit_name} />}
            </div>
          </div>
          <div className="col-span-8 s lg:col-span-6">
            <Tab.Group>
              <Tab.List className="flex rounded-xl ">
                <CustomTab>
                  <div>
                    <h1 className="">Details</h1>
                    <h1 className=" text-xs">Updated {moment(game?.updated).format("DD/MM/YYYY")}</h1>
                  </div>
                </CustomTab>
                <CustomTab>
                  <div>
                    <h1 className="">Gallery</h1>
                    <div>
                      <h1 className=" text-xs">
                        {gameSS?.count} Images {gameTrailers?.count > 0 && ` -  ${gameTrailers?.count} Videos`}
                      </h1>
                    </div>
                  </div>
                </CustomTab>
                <CustomTab>
                  <div>
                    <h1 className="">Reviews</h1>
                    <div className="flex items-center gap-1">
                      <div className="flex gap-0.5">
                        <StarIcon className="h-3 w-3 md:h-5  md:w-5 text-yellow-400" />
                        <StarIcon className="h-3 w-3 md:h-5  md:w-5 text-yellow-400" />
                        <StarIcon className="h-3 w-3 md:h-5  md:w-5 text-yellow-400" />
                        <StarIcon className="h-3 w-3 md:h-5  md:w-5 text-yellow-400" />
                        <StarIcon className="h-3 w-3 md:h-5  md:w-5 text-yellow-400" />
                      </div>
                      <h1 className="text-xs"> ({game?.reviews_count})</h1>
                    </div>
                  </div>
                </CustomTab>
                <CustomTab>
                  <div>
                    <h1 className="">DLC</h1>
                    <div>
                      <h1 className="text-xs">{gameDlc?.count} expansions </h1>
                    </div>
                  </div>
                </CustomTab>
              </Tab.List>
              <Tab.Panels>
                <Tab.Panel>
                  <div
                    className="text-gray-100 pt-4"
                    dangerouslySetInnerHTML={{
                      __html: game?.description,
                    }}
                  ></div>
                </Tab.Panel>
                <Tab.Panel>
                  <div className="py-5 grid grid-cols-1 lg:grid-cols-2 gap-5 ">
                    {gameTrailers?.results &&
                      gameTrailers.results.map((trailer: any) => {
                        return (
                          <video
                            key={trailer.id}
                            className="aspect-video"
                            controls={true}
                            poster={trailer.preview}
                            src={trailer.data.max}
                            preload="metadata"
                          />
                        );
                      })}

                    {gameSS?.results &&
                      gameSS.results.map((gameSS: any) => (
                        <Image
                          key={gameSS.id}
                          src={gameSS.image}
                          alt={gameSS.image}
                          layout="responsive"
                          className="object-cover w-full duration-200 ease-in h-60 hover:scale-105"
                          width={550}
                          height={300}
                          placeholder="blur"
                          blurDataURL={`/_next/image?url=${gameSS.image}&w=16&q=1`}
                        />
                      ))}
                  </div>
                </Tab.Panel>
                <Tab.Panel>
                  {gameGameReviews?.results.map((gameReview: any) => {
                    return (
                      <div key={gameReview?.id} className="p-4 shadow shadow-orange-900 ">
                        <div className="flex justify-between">
                          <div className="flex gap-2">
                            {gameReview?.user?.avatar && (
                              <div className="h-10 w-10">
                                <Image
                                  src={gameReview?.user.avatar}
                                  alt={gameReview?.user.avatar}
                                  layout="responsive"
                                  className="h-10 w-10  object-cover"
                                  width={50}
                                  height={50}
                                  placeholder="blur"
                                  blurDataURL={`/_next/image?url=${gameReview?.user.avatar}&w=16&q=1`}
                                />
                              </div>
                            )}
                            <div>
                              <h1 className="font-light text-gray-600">{gameReview?.user?.username}</h1>
                              <div className="flex items-center gap-1">
                                <div className="flex gap-0.5">
                                  <StarIcon className="h-3 w-3 md:h-5  md:w-5 text-yellow-400" />
                                  <StarIcon className="h-3 w-3 md:h-5  md:w-5 text-yellow-400" />
                                  <StarIcon className="h-3 w-3 md:h-5  md:w-5 text-yellow-400" />
                                  <StarIcon className="h-3 w-3 md:h-5  md:w-5 text-yellow-400" />
                                  <StarIcon className="h-3 w-3 md:h-5  md:w-5 text-yellow-400" />
                                </div>
                                <h1 className="text-xs"> ({gameReview?.rating})</h1>
                              </div>
                            </div>
                          </div>
                          <h1>{moment(gameReview?.created).startOf("minute").fromNow()}</h1>
                        </div>
                        <div
                          className="text-gray-100 mt-4"
                          dangerouslySetInnerHTML={{
                            __html: gameReview?.text,
                          }}
                        ></div>
                      </div>
                    );
                  })}
                </Tab.Panel>
                <Tab.Panel>
                  <div className="py-5 grid grid-cols-2 gap-5">
                    {gameDlc?.results &&
                      gameDlc.results.map((game: any) => (
                        <div key={game.id}>
                          {game.background_image && (
                            <Image
                              layout="responsive"
                              className=" object-cover w-full duration-200 ease-in h-60 hover:scale-105"
                              src={game.background_image}
                              width={550}
                              height={300}
                              alt="Sunset in the mountains"
                            />
                          )}
                          <h1 className="mt-1">{game?.name}</h1>
                        </div>
                      ))}
                  </div>
                </Tab.Panel>
              </Tab.Panels>
            </Tab.Group>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Game;

interface DescItemProps {
  title: string;
  value: string;
}

const DescItem: React.FC<DescItemProps> = ({ children, title, value }) => {
  return (
    <div className="flex justify-between mb-3">
      <h1 className="text-sm text-gray-500">{title}</h1>
      <h1 className="text-sm text-right font-semibold">{value}</h1>
    </div>
  );
};

interface CustomTabProps {
  children: React.ReactNode;
  isDisabled?: boolean;
}

const CustomTab: React.FC<CustomTabProps> = ({ children, isDisabled }) => {
  return (
    <Tab
      disabled={isDisabled}
      className={({ selected }) =>
        classNames(
          "w-full  py-2.5 text-md font-semibold leading-5  text-left  right-0",
          selected ? " border-b-2  border-b-orange-400  text-orange-400" : "border-b-2 "
        )
      }
    >
      {children}
    </Tab>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  let game;
  let gameSS;
  let gameDlc;
  let gameTrailers;
  let gameGameReviews;

  if (params && params.id) {
    game = await fetchGameDetails(params.id.toString());
    gameSS = await fetchGameSS(params.id.toString());
    gameDlc = await fetchGameDLC(params.id.toString());
    gameTrailers = await fetchGameTrailer(params.id.toString());
    gameGameReviews = await fetchGameReviews(params.id.toString());
  }

  return {
    props: {
      game,
      gameSS,
      gameDlc,
      gameTrailers,
      gameGameReviews,
    },
  };
};
