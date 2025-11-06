import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const QUOTE_DATA = {
  motivation: [
    "Push yourself, because no one else is going to do it for you.",
    "Don’t stop when you’re tired. Stop when you’re done.",
    "Dream it. Believe it. Build it.",
    "The key to success is to start before you’re ready.",
    "Work hard in silence, let your success make the noise."
  ],
  life: [
    "Life is 10% what happens to us and 90% how we react to it.",
    "Difficulties in life are intended to make us better, not bitter.",
    "In the end, we only regret the chances we didn’t take.",
    "Keep smiling, because life is a beautiful thing.",
    "Your time is limited, don’t waste it living someone else’s life."
  ],
  success: [
    "Success is not in what you have, but who you are.",
    "Success doesn’t just find you; you have to go out and get it.",
    "The harder you work, the luckier you get.",
    "Don’t wait for opportunity. Create it.",
    "Success is the sum of small efforts repeated day in and day out."
  ],
  love: [
    "Love is the flower you’ve got to let grow.",
    "Where there is love, there is life.",
    "The best thing to hold onto in life is each other.",
    "Love cures people—both the ones who give it and the ones who receive it.",
    "Being deeply loved gives you strength; loving deeply gives you courage."
  ],
  happiness: [
    "Happiness depends upon ourselves.",
    "Be happy with what you have. Be excited about what you want.",
    "Happiness is not by chance, but by choice.",
    "The purpose of our lives is to be happy.",
    "Count your age by friends, not years. Count your life by smiles, not tears."
  ],
};

export default function Quote() {
  const [category, setCategory] = useState("motivation");
  const [quote, setQuote] = useState("");

  // pick a random quote from the selected category
  const generateQuote = () => {
    const quotes = QUOTE_DATA[category];
    const random = quotes[Math.floor(Math.random() * quotes.length)];
    setQuote(random);
  };

  useEffect(() => {
    generateQuote();
  }, [category]);

  return (
    <div className="quote-container">
      <motion.h1
        className="quote-title"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        🌟 Motivational Quote Generator 💭
      </motion.h1>

      <div className="quote-controls">
        <label htmlFor="category">Choose Theme:</label>
        <select
          id="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="quote-dropdown"
        >
          {Object.keys(QUOTE_DATA).map((cat) => (
            <option key={cat} value={cat}>
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </option>
          ))}
        </select>
      </div>

      <motion.div
        className="quote-card"
        key={quote}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <p className="quote-text">“{quote}”</p>
        <p className="quote-author">— Your Daily Motivation</p>
      </motion.div>

      <button className="quote-button" onClick={generateQuote}>
        🔁 New Quote
      </button>
    </div>
  );
}
