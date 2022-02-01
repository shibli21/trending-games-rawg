import React from "react";
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

interface Props {}

const Footer = (props: Props) => {
  return (
    <footer className="py-10 mx-auto mt-20 shadow shadow-orange-400">
      <p className="font-mono text-center"> ©{new Date().getFullYear()} Shibli. All rights reserved.</p>
      <div className="flex justify-center gap-3 py-2">
        <a href="https://github.com/shibli21" rel="noreferrer" target="_blank" aria-label="Github">
          <FaGithub size="20px" className="cursor-pointer hover:text-orange-500" />
        </a>
        <a href="https://twitter.com/shibli21" rel="noreferrer" target="_blank" aria-label="Twitter">
          <FaTwitter size="20px" className="cursor-pointer hover:text-orange-500" />
        </a>
        <a href="https://twitter.com/shibli21" rel="noreferrer" target="_blank" aria-label="Instagram">
          <FaInstagram size="20px" className="cursor-pointer hover:text-orange-500" />
        </a>
        <a href="https://www.linkedin.com/in/shibli21/" rel="noreferrer" target="_blank" aria-label="Linkedin">
          <FaLinkedin size="20px" className="cursor-pointer hover:text-orange-500" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
