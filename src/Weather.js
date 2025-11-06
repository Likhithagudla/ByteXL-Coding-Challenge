import React, { useState } from "react";
import { motion } from "framer-motion";

export default function Weather() {
  const [city, setCity] = useState("");
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchWeather = async () => {
    setLoading(true);
    setError("");
    setResult(null);
    try {
      const resp = await fetch(`/api/weather?city=${encodeURIComponent(city)}`);
      const data = await resp.json();
      if (!resp.ok) throw new Error(data.error || "Server error");
      setResult(data);
    } catch (e) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="page-container">
      <motion.h1
        className="page-title"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        🌦️ Live Weather Dashboard
      </motion.h1>

      <div className="input-section">
        <input
          placeholder="Enter city (e.g., Hyderabad)"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="input-box"
        />
        <button
          onClick={fetchWeather}
          disabled={!city || loading}
          className="action-button"
        >
          {loading ? "Loading..." : "🔍 Get Weather"}
        </button>
      </div>

      {error && (
        <motion.div
          className="error-text"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          {error}
        </motion.div>
      )}

      {result && (
        <motion.div
          className="info-card"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          <h2 className="city-name">{result.city}</h2>
          <div className="weather-content">
            <img
              src={`https://openweathermap.org/img/wn/${result.icon}@2x.png`}
              alt="icon"
              className="weather-icon"
            />
            <div className="weather-details">
              <div className="temp">{result.temp}°C</div>
              <div className="desc">{result.desc}</div>
              <div className="extra-info">
                💧 {result.humidity}% | 🌬️ {result.wind} m/s
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
}
