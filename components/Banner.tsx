import React from "react";
import Button from "./Button";

interface Props {}

export const Banner = (props: Props) => {
  return (
    <div className="">
      <div className=" px-4  py-12 text-start sm:px-6 lg:py-16 lg:px-8">
        <h2 className="transform px-4 py-2 mt-20  -skew-x-12 bg-purple-200 inline-block text-6xl font-extrabold text-gray-700 sm:text-8xl">
          <span className=" ">Coffind</span>
        </h2>
        <p className="mt-2 text-lg sm:text-3xl italic text-gray-600 font-semibold">
          Discover the best coffee shops in your area . . .
        </p>

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
