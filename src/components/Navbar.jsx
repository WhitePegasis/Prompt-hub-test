import React, { useState } from 'react';
import { SidebarWithBurgerMenu } from './Sidebar';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
       <SidebarWithBurgerMenu/>
        <div className="flex items-center">
          <span className="text-white text-lg font-bold">Company Name</span>
        </div>
        <div className="hidden sm:block">
          <button className="text-white mx-4">Button 1</button>
          <button className="text-white mx-4">Button 2</button>
          <button className="text-white mx-4">Button 3</button>
        </div>
        <div className="sm:hidden">
          <button className="text-white" onClick={toggleMenu}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="sm:hidden">
          <button className="block text-white w-full py-2 px-4">Button 1</button>
          <button className="block text-white w-full py-2 px-4">Button 2</button>
          <button className="block text-white w-full py-2 px-4">Button 3</button>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
