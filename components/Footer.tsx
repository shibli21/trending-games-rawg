import React from "react";

interface Props {}

const Footer = (props: Props) => {
  return (
    <footer className="container py-4 mx-auto ">
      <p className="text-center font-mono"> ©{new Date().getFullYear()} Shibli. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
