import React from 'react';
import { FaXTwitter } from 'react-icons/fa6';
import { FaLinkedin, FaFacebook } from 'react-icons/fa';

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <div className="w-3/5 mx-auto my-16">
      <div className="flex md:flex-row flex-col md:gap-0 gap-4 justify-between items-center text-black">
        <div className="[ bg-gradient-to-r dark:from-gray-400 from-black dark:to-white to-gray-200 text-transparent bg-clip-text ] text-2xl">
          ethereal
        </div>
        <ul className="flex gap-6 text-caption">
          <li className="hover-link">Home</li>
          <li className="hover-link">Features</li>
          <li className="hover-link">Connect</li>
        </ul>
        <div className="flex gap-4 dark:text-white">
          <FaXTwitter size={20} className="cursor-pointer " />
          <FaLinkedin size={20} className="cursor-pointer" />
          <FaFacebook size={20} className="cursor-pointer" />
        </div>
      </div>
      <div className="divider invisible md:visible"></div>
      <div className="md:mt-0 -mt-4 flex md:flex-row flex-col md:gap-0 gap-1 justify-between items-center">
        <div>with ❤️ from JKT</div>
        <div className="text-center">
          &copy;{year} Ethereal. All rights reserved
        </div>
      </div>
    </div>
  );
};

export default Footer;
