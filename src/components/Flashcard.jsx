import React, { useState } from 'react';

const Flashcard = ({ card }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div
      className={`w-full max-w-lg h-72 perspective cursor-pointer mx-auto group`} // Increased size, added group for potential hover effects
      onClick={handleFlip}
    >
      <div
        className={`relative w-full h-full transition-transform duration-700 transform-style-preserve-3d rounded-xl overflow-hidden shadow-xl group-hover:shadow-2xl ${isFlipped ? 'rotate-y-180' : ''}`} // Added group-hover:shadow-2xl
      >
        {/* Front of the card */}
        <div className="absolute w-full h-full backface-hidden bg-gradient-to-br from-white to-gray-100 dark:from-gray-700 dark:to-gray-800 rounded-xl flex items-center justify-center p-8 border border-gray-200 dark:border-gray-600">
          <p className="text-2xl font-medium text-gray-800 dark:text-gray-100 text-center">{card.question}</p>
        </div>
        {/* Back of the card */}
        <div className="absolute w-full h-full backface-hidden bg-gradient-to-br from-blue-100 to-blue-200 dark:from-blue-800 dark:to-blue-900 rounded-xl flex items-center justify-center p-8 border border-blue-200 dark:border-blue-700 rotate-y-180">
          <p className="text-xl text-blue-800 dark:text-blue-100 text-center">{card.answer}</p>
        </div>
      </div>
    </div>
  );
};

export default Flashcard;
