import React from "react";

interface Props {}

const Footer = (props: Props) => {
  return (
    <footer className="mt-20 py-10 mx-auto shadow-orange-400 shadow">
      <p className="text-center font-mono"> ©{new Date().getFullYear()} Shibli. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
