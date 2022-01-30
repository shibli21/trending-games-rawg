import React from "react";
import Button from "./Button";

interface Props {}

export const Banner = (props: Props) => {
  return (
    <div className="">
      <div className="py-12 text-start lg:py-16">
        <h2 className="inline-block px-4 py-2 mt-20 text-6xl font-extrabold  transform -skew-x-12 bg-orange-500  sm:text-8xl">
          <span className="uppercase">Trending</span>
        </h2>
        <p className="mt-2 text-lg italic font-semibold  sm:text-3xl">Discover the best games in the world</p>

        <div className="pt-10">
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
            Find Near Your
          </Button>
        </div>
      </div>
    </div>
  );
};
