import { StarIcon } from "@heroicons/react/solid";
import Image from "next/image";
import Link from "next/link";
import React from "react";

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
    <Link href={`/game/${id}`} passHref>
      <div className="max-w-sm overflow-hidden shadow cursor-pointer shadow-orange-900">
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
        <div className="flex justify-between items-start m-4">
          <h2 className="text-xl italic font-semibold ">{name}</h2>
          <div className="flex gap-1 items-center">
            <StarIcon className="h-4 w-4 text-orange-500" />
            {rating}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default GameCard;
