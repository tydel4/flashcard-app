import React from 'react';
import Flashcard from './Flashcard';

const FlashcardList = ({ cards, currentCardIndex, setCurrentCardIndex }) => {
  const handleNext = () => {
    setCurrentCardIndex((prevIndex) => (prevIndex + 1) % cards.length);
  };

  const handlePrev = () => {
    setCurrentCardIndex((prevIndex) => (prevIndex - 1 + cards.length) % cards.length);
  };

  if (!cards || cards.length === 0) {
    return <p className="text-center text-gray-500 dark:text-gray-400 mt-12 text-lg">No flashcards yet. Add one below!</p>;
  }

  return (
    <div className="flex flex-col items-center mt-10 mb-8">
      <Flashcard card={cards[currentCardIndex]} />
      <div className="flex justify-between items-center space-x-4 mt-8 w-full max-w-lg">
        <button
          onClick={handlePrev}
          disabled={cards.length <= 1}
          className="px-5 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-md shadow-sm disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
        >
          Previous
        </button>
        <span className="text-gray-700 dark:text-gray-300 font-medium">
          {currentCardIndex + 1} / {cards.length}
        </span>
        <button
          onClick={handleNext}
          disabled={cards.length <= 1}
          className="px-5 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-md shadow-sm disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default FlashcardList;
