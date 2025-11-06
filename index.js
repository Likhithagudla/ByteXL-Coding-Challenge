require('dotenv').config();
const express = require('express');
const cors = require('cors');
const fetch = require('node-fetch');
const app = express();

const PORT = process.env.PORT || 3001;
const OPENWEATHER_API_KEY = process.env.OPENWEATHER_API_KEY || '';
const USE_MOCK = (process.env.USE_MOCK || 'false').toLowerCase() === 'true';

app.use(cors());
app.use(express.json());

function sendError(res, message, code = 400) {
  return res.status(code).json({ error: message });
}

/* ---------------- WEATHER ---------------- */
app.get('/api/weather', async (req, res) => {
  const city = (req.query.city || '').trim();
  if (!city) return sendError(res, 'City required');

  if (USE_MOCK) {
    return res.json({
      city,
      temp: 29,
      feels_like: 30,
      desc: 'partly cloudy (mock)',
      humidity: 58,
      wind: 3.4,
      icon: '02d'
    });
  }

  if (!OPENWEATHER_API_KEY) return sendError(res, 'OPENWEATHER_API_KEY not set', 500);

  try {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(
      city
    )}&appid=${OPENWEATHER_API_KEY}&units=metric`;
    const r = await fetch(url);
    const data = await r.json();

    if (!r.ok) return sendError(res, data.message || 'Weather API error', r.status);

    res.json({
      city: `${data.name}, ${data.sys.country}`,
      temp: data.main.temp,
      feels_like: data.main.feels_like,
      desc: data.weather[0].description,
      humidity: data.main.humidity,
      wind: data.wind.speed,
      icon: data.weather[0].icon
    });
  } catch (err) {
    console.error(err);
    sendError(res, 'Network error fetching weather', 502);
  }
});

/* ---------------- CURRENCY CONVERSION ---------------- */
/* ---------------- CURRENCY CONVERSION (Reliable) ---------------- */
app.get('/api/convert', async (req, res) => {
  const { from = 'USD', to = 'INR', amount = 1 } = req.query;
  const amt = parseFloat(amount);
  if (isNaN(amt) || amt <= 0) return sendError(res, 'Invalid amount');

  try {
    const base = from.toUpperCase();
    const target = to.toUpperCase();
    const url = `https://open.er-api.com/v6/latest/${base}`;
    const r = await fetch(url);
    const data = await r.json();

    if (data.result !== 'success' || !data.rates[target]) {
      console.error('Currency API error:', data);
      return sendError(res, 'Currency API error');
    }

    const rate = data.rates[target];
    const converted = amt * rate;

    res.json({
      from: base,
      to: target,
      amount: amt,
      result: converted,
      rate
    });
  } catch (err) {
    console.error('Currency conversion failed:', err);
    sendError(res, 'Currency conversion failed', 502);
  }
});



/* ---------------- QUOTES ---------------- */
const quotes = {
  motivation: [
    'Push yourself because no one else is going to do it for you.',
    'Dream big and dare to fail.',
    'Success is not final, failure is not fatal.'
  ],
  life: [
    'Life is what happens when you’re busy making other plans.',
    'The purpose of our lives is to be happy.',
    'Live in the sunshine, swim in the sea, drink the wild air.'
  ],
  education: [
    'Education is the most powerful weapon you can use to change the world.',
    'Learning never exhausts the mind.',
    'The beautiful thing about learning is that nobody can take it away from you.'
  ]
};

app.get('/api/quote', (req, res) => {
  const category = (req.query.category || 'motivation').toLowerCase();
  const list = quotes[category] || quotes.motivation;
  const q = list[Math.floor(Math.random() * list.length)];
  res.json({ category, quote: q });
});

/* ---------------- HEALTH CHECK ---------------- */
app.get('/api/health', (req, res) => res.json({ ok: true }));

app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
