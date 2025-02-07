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
      <Button size="circle" color="primary" onClick={handleClick}>
        <RxHamburgerMenu className="[ text-white lg:text-2xl md:text-xl text-lg ]" />
      </Button>

      {isOpen && (
        <div className="absolute z-40 top-[1em] right-[2em]">
          <div className="bg-white rounded p-[2em] [ flex justify-center gap-[12em] ]">
            <ul className="main-text">
              <li>Home</li>
              <li>About</li>
              <li>Product</li>
            </ul>
            <button onClick={handleClick} className="[ flex justify-end ]">
              <IoIosCloseCircle size={40} className="text-black" />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default MenuToggle;
