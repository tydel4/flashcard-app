import React from 'react';

const Header = () => {
  return (
    <header className="bg-white text-gray-900 p-4 shadow-md flex justify-between items-center sticky top-0 z-10 transition-colors duration-300 border-b border-gray-200">
      <h1 className="text-2xl font-bold">Flashcard App</h1>
    </header>
  );
};

export default Header;
