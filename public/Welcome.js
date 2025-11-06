import React from "react";
import { motion } from "framer-motion";

export default function Welcome({ onStart }) {
  return (
    <div className="welcome-container">
      <motion.div
        className="welcome-card"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h1
          className="welcome-title"
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          👋 Welcome to <span className="highlight">InfoHub</span>
        </motion.h1>

        <motion.p
          className="welcome-text"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          At <strong>ByteXL</strong>, we build tools that make engineering learning
          practical and connected.
        </motion.p>

        <motion.p
          className="welcome-subtext"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
        >
          Explore everyday utilities — <span className="highlight">Weather</span>,{" "}
          <span className="highlight">Currency</span> &{" "}
          <span className="highlight">Motivation</span> — all in one place.
        </motion.p>

        <motion.button
          className="start-button"
          onClick={onStart}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          🚀 Let’s Start
        </motion.button>
      </motion.div>
    </div>
  );
}
