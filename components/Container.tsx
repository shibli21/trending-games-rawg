import React, { FC } from "react";

const Container: FC = ({ children }) => {
  return <div className="px-4 container mx-auto">{children}</div>;
};

export default Container;
