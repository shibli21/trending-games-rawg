import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { FC, useState } from "react";
import { fetchGameDetails, fetchGameDLC, fetchGames, fetchGameSS, fetchGameTrailer } from "../../lib/game";
import { Tab } from "@headlessui/react";
import { StarIcon } from "@heroicons/react/solid";
import moment from "moment";
import Head from "next/head";
import ReactPlayer from "react-player";

interface Props {}
function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}

const Place: InferGetStaticPropsType<typeof getStaticProps> = (props: any) => {
  const router = useRouter();
  const { game, gameSS, gameDlc, gameTrailers } = props;
  console.log(props);

  return (
    <div className="container mx-auto ">
      <Head>
        <title>{game.name}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Link href="/">Back to home</Link>
      <div className="container rounded-xl">
        <Image
          layout="responsive"
          className="object-cover w-full duration-200 ease-in h-60 hover:scale-105"
          src={game.background_image}
          width={550}
          height={300}
          alt="Sunset in the mountains"
        />
      </div>
      <div className="pt-4">
        <h1 className="font-sans text-2xl font-semibold ">{game.name}</h1>
        <h1 className="font-light text-gray-600">
          <span>Released</span> {game.released}
        </h1>

        <div className="grid grid-cols-8  gap-10  px-2 py-16 sm:px-0">
          <div className="col-span-8  lg:col-span-2">
            <div className="p-4 shadow shadow-orange-900 bg-gray-800 ">
              <DescItem title="Genre" value={getGenres(game.genres)} />
              <DescItem title="Release" value={moment(game.released).format("DD/MM/YYYY")} />
              <DescItem title="Company" value={getPublishers(game.publishers)} />
              <DescItem title="Size" value="14.4GB" />
              <DescItem title="Age Rating" value={game.esrb_rating.name} />
              <DescItem title="Platforms" value={getPlatform(game.parent_platforms)} />
              <DescItem title="Reddit" value={game.reddit_name} />
            </div>
          </div>
          <div className="col-span-8 s lg:col-span-6">
            <Tab.Group>
              <Tab.List className="flex rounded-xl">
                <CustomTab>
                  <div>
                    <h1 className="">Details</h1>
                    <h1 className=" text-xs">Updated {moment(game.updated).format("DD/MM/YYYY")}</h1>
                  </div>
                </CustomTab>
                <CustomTab>
                  <div>
                    <h1 className="">Gallery</h1>
                    <div>
                      <h1 className=" text-xs">
                        {gameSS.count} Images {gameTrailers.count > 0 && ` -  ${gameTrailers.count} Videos`}
                      </h1>
                    </div>
                  </div>
                </CustomTab>
                <CustomTab isDisabled>
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
                      <h1 className="text-xs"> ({game.reviews_count})</h1>
                    </div>
                  </div>
                </CustomTab>
                <CustomTab>
                  <div>
                    <h1 className="">DLC</h1>
                    <div>
                      <h1 className="text-xs">{gameDlc.count} expansions </h1>
                    </div>
                  </div>
                </CustomTab>
              </Tab.List>
              <Tab.Panels>
                <Tab.Panel>
                  <div
                    className="text-gray-100 mt-4"
                    dangerouslySetInnerHTML={{
                      __html: props.game.description,
                    }}
                  ></div>
                </Tab.Panel>
                <Tab.Panel>
                  <div className="py-5 grid grid-cols-1 lg:grid-cols-2 gap-5">
                    {gameTrailers &&
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

                    {gameSS.results.map((gameSS: any) => (
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
                <Tab.Panel>Content 2</Tab.Panel>
                <Tab.Panel>
                  <div className="py-5 grid grid-cols-2 gap-5">
                    {gameDlc.results.map((game: any) => (
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
                        <h1 className="mt-1">{game.name}</h1>
                      </div>
                    ))}
                  </div>
                </Tab.Panel>
              </Tab.Panels>
            </Tab.Group>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Place;

const getGenres = (genre) => {
  let genres = [];

  genre.forEach((p) => {
    genres.push(p.name);
  });

  return genres.join(", ");
};
const getPublishers = (publisher) => {
  let publishers = [];

  publisher.forEach((p) => {
    publishers.push(p.name);
  });

  return publishers.join(", ");
};
const getPlatform = (platforms) => {
  let platformss = [];

  platforms.forEach((platform) => {
    platformss.push(platform.platform.name);
  });

  return platformss.join(", ");
};

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
          "w-full py-2.5 text-md font-semibold leading-5  text-left  right-0",
          selected ? " border-b-2  border-b-orange-400  text-orange-400" : "border-b-2 "
        )
      }
    >
      {children}
    </Tab>
  );
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  let game;
  let gameSS;
  let gameDlc;
  let gameTrailers;

  if (params && params.id) {
    game = await fetchGameDetails(params.id.toString());
    gameSS = await fetchGameSS(params.id.toString());
    gameDlc = await fetchGameDLC(params.id.toString());
    gameTrailers = await fetchGameTrailer(params.id.toString());
  }

  return {
    props: {
      game,
      gameSS,
      gameDlc,
      gameTrailers,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async (context) => {
  const games = await fetchGames();

  const paths = games.results.map((game: any) => ({
    params: {
      id: game.id.toString(),
    },
  }));

  return {
    paths,
    fallback: true,
  };
};
