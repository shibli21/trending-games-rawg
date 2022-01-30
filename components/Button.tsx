import React, { ButtonHTMLAttributes } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  icon?: React.ReactNode;
  isLoading?: boolean;
}

const Button = (props: Props) => {
  return (
    <button
      type="button"
      className=" shadow shadow-orange-700 text-white group font-medium text-sm px-5 py-2.5 text-center inline-flex justify-center items-center bg-orange-500  hover:bg-orange-600   focus:outline-none"
      {...props}
    >
      {props.isLoading ? (
        <div className="w-5 h-5 border-2 border-top-color:transparent border-white border-dashed rounded-full animate-spin"></div>
      ) : (
        <div className="inline-flex ">
          {props.children}
          {props.icon && (
            <span className="ml-1 group-hover:g group-hover:translate-x-1 transition-all">{props.icon}</span>
          )}
        </div>
      )}
    </button>
  );
};

export default Button;
