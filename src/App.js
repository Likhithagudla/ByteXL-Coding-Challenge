import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Weather from "./Weather";
import Converter from "./Converter";
import Quote from "./Quote";
import "./App.css";

export default function App() {
  const [showWelcome, setShowWelcome] = useState(true);
  const [activeView, setActiveView] = useState(null);

  const renderView = () => {
    switch (activeView) {
      case "WEATHER":
        return <Weather />;
      case "CURRENCY":
        return <Converter />;
      case "QUOTES":
        return <Quote />;
      default:
        return (
          <motion.div
            className="menu-container"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="menu-title">InfoHub</h1>
            <p className="menu-subtext">
              Explore three powerful tools in one place.
            </p>
            <div className="menu-buttons">
              <button
                className="menu-btn"
                onClick={() => setActiveView("WEATHER")}
              >
                🌦️ WEATHER
              </button>
              <button
                className="menu-btn"
                onClick={() => setActiveView("CURRENCY")}
              >
                💱 CURRENCY CONVERTER
              </button>
              <button
                className="menu-btn"
                onClick={() => setActiveView("QUOTES")}
              >
                💭 MOTIVATIONAL QUOTES
              </button>
            </div>
          </motion.div>
        );
    }
  };

  return (
    <div className="app-bg">
      <AnimatePresence>
        {showWelcome ? (
          <motion.div
            className="popup"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.6 }}
          >
            <h2>Welcome to <span className="highlight">InfoHub 🌟</span></h2>
            <p className="welcome-line">
              At <strong>ByteXL</strong>, we make engineering learning
              practical and connected.
            </p>
            <p className="welcome-line-small">
              Your one-stop tool for Weather, Currency & Motivation.
            </p>
            <button className="start-btn" onClick={() => setShowWelcome(false)}>
              🚀 Let’s Start
            </button>
          </motion.div>
        ) : (
          <>
            <AnimatePresence mode="wait">{renderView()}</AnimatePresence>
            {activeView && (
              <motion.button
                className="back-btn"
                onClick={() => setActiveView(null)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                ← Back
              </motion.button>
            )}
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
