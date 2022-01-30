import React from "react";

interface Props {
  children: React.ReactNode;
  icon?: React.ReactNode;
  isLoading?: boolean;
}

const Button = ({ children, icon, isLoading }: Props) => {
  return (
    <button
      type="button"
      className="text-white group font-medium text-sm px-5 py-2.5 text-center inline-flex justify-center items-center bg-orange-500 rounded-lg shadow-md hover:bg-orange-600   focus:outline-none"
    >
      {!isLoading ? (
        <div className="w-5 h-5 border-2 border-top-color:transparent border-white border-dashed rounded-full animate-spin"></div>
      ) : (
        <div className="inline-flex ">
          {children}
          {icon && <span className="ml-1 group-hover:g group-hover:translate-x-1 transition-all">{icon}</span>}
        </div>
      )}
    </button>
  );
};

export default Button;
