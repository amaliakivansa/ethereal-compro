'use client';
import { useState } from 'react';
import { RxHamburgerMenu } from 'react-icons/rx';
import { IoIosCloseCircle } from 'react-icons/io';
import Button from './Button';

const MenuToggle = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => setIsOpen(!isOpen);

  return (
    <>
      {/* Toggle Button */}
      <Button
        size="circle"
        color="primary"
        onClick={handleClick}
        className="btn-hover transition-transform duration-300 active:scale-90"
      >
        <RxHamburgerMenu className="text-white lg:text-2xl md:text-xl text-lg" />
      </Button>

      {/* Menu */}
      <div
        className={`fixed inset-0 z-40 bg-white transition-opacity duration-300 ${
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <div
          className={`absolute top-0 left-0 w-full h-full [ flex flex-col justify-center items-center ] transition-transform duration-500 ${
            isOpen ? 'translate-y-0' : '-translate-y-full'
          }`}
        >
          <ul className="text-xl font-semibold text-black text-center space-y-6">
            <li className="hover-link cursor-pointer">Home</li>
            <li className="hover-link cursor-pointer">Features</li>
            <li className="hover-link cursor-pointer">Connect</li>
          </ul>

          {/* Close Button */}
          <button
            onClick={handleClick}
            className="absolute top-4 right-4 transition-transform duration-300 hover:scale-110"
          >
            <IoIosCloseCircle size={40} className="text-black" />
          </button>
        </div>
      </div>
    </>
  );
};

export default MenuToggle;
