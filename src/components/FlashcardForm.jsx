import React, { useState } from 'react';

const FlashcardForm = ({ addCard }) => {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!question.trim() || !answer.trim()) return;
    addCard({ question, answer, id: Date.now() });
    setQuestion('');
    setAnswer('');
  };

  return (
    <form onSubmit={handleSubmit} className="mt-12 mb-10 p-8 bg-white dark:bg-gray-800 rounded-xl shadow-lg max-w-lg mx-auto border border-gray-200 dark:border-gray-700">
      <h2 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-gray-100 text-center">Add a New Flashcard</h2>
      <div className="mb-5">
        <label htmlFor="question" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Question</label>
        <textarea
          id="question"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          placeholder="Enter the question"
          rows="3"
          className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-md bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition duration-150 ease-in-out shadow-sm resize-none"
          required
        />
      </div>
      <div className="mb-6">
        <label htmlFor="answer" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Answer</label>
        <textarea
          id="answer"
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          placeholder="Enter the answer"
          rows="3"
          className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-md bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition duration-150 ease-in-out shadow-sm resize-none"
          required
        />
      </div>
      <button
        type="submit"
        className="w-full px-4 py-3 bg-green-600 hover:bg-green-700 text-white rounded-md shadow-md transition-colors duration-200 font-semibold text-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800"
      >
        Add Card
      </button>
    </form>
  );
};

export default FlashcardForm;
