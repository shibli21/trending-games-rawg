import React from "react";
import Button from "./Button";

interface Props {}

export const Banner = (props: Props) => {
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
          type="text"
          id="search"
          className=" bg-gray-50 border-4 lg:max-w-[300px]  border-orange-500 text-gray-900 text-sm  block w-full p-2.5 focus:outline-none"
          required
        />
        <Button
          icon={
            <svg
              className="w-5 h-5 ml-2 -mr-1"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          }
          isLoading={true}
        >
          Search
        </Button>
      </div>
    </div>
  );
};
