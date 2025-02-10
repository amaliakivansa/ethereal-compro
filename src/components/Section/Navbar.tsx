'use client';
import React from 'react';
import ThemeToggle from '../Base/ThemeToggle';
import MenuToggle from '../Base/MenuToggle';

const Navbar = () => {
  return (
    <nav className="w-full">
      <div className="md:shadow-none shadow-md md:rounded-none rounded-lg [ flex justify-between items-center ] [ md:px-8 md:py-4 p-4 mx-auto ]">
        <div className="[ bg-gradient-to-r dark:from-gray-400 from-black dark:to-white to-gray-200 text-transparent bg-clip-text ] text-2xl">
          ethereal
        </div>
        <div className="flex gap-4">
          <ThemeToggle />
          <MenuToggle />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
