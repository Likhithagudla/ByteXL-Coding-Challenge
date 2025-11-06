import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Currency() {
  const [currencies, setCurrencies] = useState({});
  const [from, setFrom] = useState("USD");
  const [to, setTo] = useState("INR");
  const [amount, setAmount] = useState(1);
  const [result, setResult] = useState(null);

  useEffect(() => {
    const fetchCurrencies = async () => {
      const res = await fetch("https://open.er-api.com/v6/latest/USD");
      const data = await res.json();
      setCurrencies(data.rates || {});
    };
    fetchCurrencies();
  }, []);

  const convert = () => {
    if (!currencies[to] || !currencies[from]) return;
    const conversionRate = currencies[to] / currencies[from];
    setResult((amount * conversionRate).toFixed(2));
  };

  return (
    <div className="page-container">
      <motion.h1
        className="page-title"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        💱 Global Currency Converter
      </motion.h1>

      <div className="input-section">
        <input
          type="number"
          placeholder="Enter amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="input-box"
        />
        <select
          value={from}
          onChange={(e) => setFrom(e.target.value)}
          className="dropdown"
        >
          {Object.keys(currencies).map((code) => (
            <option key={code} value={code}>
              {code}
            </option>
          ))}
        </select>
        <span style={{ margin: "0 10px" }}>→</span>
        <select
          value={to}
          onChange={(e) => setTo(e.target.value)}
          className="dropdown"
        >
          {Object.keys(currencies).map((code) => (
            <option key={code} value={code}>
              {code}
            </option>
          ))}
        </select>
        <button onClick={convert} className="action-button">
          🔄 Convert
        </button>
      </div>

      {result && (
        <motion.div
          className="info-card"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          <h2 className="conversion-result">
            {amount} {from} = {result} {to}
          </h2>
        </motion.div>
      )}
    </div>
  );
}
