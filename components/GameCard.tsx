import { GetStaticProps } from "next";
import Image from "next/image";
import React, { Key } from "react";

type Props = {
  name: string;
  slug: string;
  imgUrl: string;
  rating: number;
  id: number;
  genres: [];
};

const GameCard = ({ name, id, genres, imgUrl, rating, slug }: Props) => {
  return (
    <div
      className="max-w-sm overflow-hidden shadow cursor-pointer shadow-orange-900"
      onClick={() => {
        window.location.href = `/game/${id}`;
      }}
    >
      <div className="">
        {imgUrl && (
          <Image
            layout="responsive"
            className="object-cover w-full duration-200 ease-in h-60 hover:scale-105 "
            src={imgUrl}
            width={500}
            height={300}
            alt={imgUrl}
            placeholder="blur"
            blurDataURL={`/_next/image?url=${imgUrl}&w=16&q=1`}
          />
        )}
      </div>
      <div className="flex justify-between m-4">
        <h2 className="text-xl italic font-semibold ">{name}</h2>
        <p className="">{rating}</p>
      </div>
      {/* <div className="pt-4 pb-4 ">
        {genres &&
          genres.map((genre: any) => (
            <span
              key={genre.name}
              className="inline-block px-3 py-1 mb-2 mr-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full"
            >
              {genre?.name}
            </span>
          ))}
      </div> */}
    </div>
  );
};

export default GameCard;
