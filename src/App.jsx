import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import FlashcardList from './components/FlashcardList';
import FlashcardForm from './components/FlashcardForm';
import './index.css'; // Ensure Tailwind styles are imported

function App() {
  const [cards, setCards] = useState([]);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);

  // Load cards from localStorage on initial render
  useEffect(() => {
    const storedCards = localStorage.getItem('flashcards');
    if (storedCards) {
      setCards(JSON.parse(storedCards));
    }
  }, []);

  // Save cards to localStorage whenever cards state changes
  useEffect(() => {
    localStorage.setItem('flashcards', JSON.stringify(cards));
    // Reset index if cards are deleted and index becomes invalid
    if (currentCardIndex >= cards.length && cards.length > 0) {
        setCurrentCardIndex(cards.length - 1);
    } else if (cards.length === 0) {
        setCurrentCardIndex(0);
    }
  }, [cards, currentCardIndex]);

  const addCard = (newCard) => {
    setCards([...cards, newCard]);
    setCurrentCardIndex(cards.length);
  };

  return (
    <div className={`min-h-screen bg-gradient-to-b from-gray-100 to-gray-200 transition-colors duration-300 font-sans`}>
      <Header />
      <main className="container mx-auto p-6 md:p-8">
        <FlashcardList
          cards={cards}
          currentCardIndex={currentCardIndex}
          setCurrentCardIndex={setCurrentCardIndex}
        />
        <FlashcardForm addCard={addCard} />
      </main>
    </div>
  );
}

export default App;
