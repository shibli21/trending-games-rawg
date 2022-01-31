import { ArrowRightIcon } from "@heroicons/react/solid";
import React, { useContext, useState } from "react";
import { GamesContext, Types } from "../store/games-context";
import Button from "./Button";

interface Props {}

export const Banner = (props: Props) => {
  const [searchQuery, setSearchQuery] = useState("");
  const { dispatch } = useContext(GamesContext);

  const updateSearchQuery = (searchQuery: string) => {
    dispatch({
      type: Types.SEARCH_QUERY,
      payload: {
        searchQuery,
      },
    });
    setSearchQuery("");
  };

  return (
    <div className="py-0 md:py-4 lg:py-10 grid grid-cols-1  md:grid-cols-1 lg:grid-cols-2 items-end">
      <div className="">
        <h2 className="inline-block px-4 py-2 mt-8  text-6xl font-extrabold  transform -skew-x-12 bg-orange-500  sm:text-8xl">
          <span className="uppercase">Trending</span>
        </h2>
        <p className="mt-2 text-lg italic font-semibold  sm:text-3xl">Discover the best games in the world</p>
      </div>
      <div className="flex gap-3 my-5 h-[40px] justify-end ">
        <input
          type="search"
          className=" bg-gray-50 border-4 lg:max-w-[300px]  border-orange-500 text-gray-900 text-sm  block w-full p-2.5 focus:outline-none"
          value={searchQuery}
          onChange={(e) => {
            e.preventDefault();
            setSearchQuery(e.target.value);
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              updateSearchQuery(searchQuery);
            }
          }}
        />
        <Button icon={<ArrowRightIcon className="h-5 w-5" />} onClick={() => updateSearchQuery(searchQuery)}>
          Search
        </Button>
      </div>
    </div>
  );
};
