# 🌐 InfoHub — ByteXL Assessment Project

## 🚀 Overview
At **ByteXL**, we build tools that make engineering learning practical and connected.  
**InfoHub** is a single-page React application that brings together three everyday utilities in one place:

- 🌦️ **Live Weather Dashboard**  
- 💱 **Currency Converter**  
- 💭 **Motivational Quote Generator**

The app provides a sleek, full-screen black-glow interface with animated transitions and intuitive navigation — designed for practicality and modern aesthetics.

---

## ✨ Features

### 🧭 1. Welcome & Navigation
- Smooth animated **welcome popup** with “Let’s Start 🚀” button.  
- Main menu includes three utilities: Weather, Currency, and Quotes.  
- Simple navigation using a glowing **Back** button.

### 🌦️ 2. Live Weather Dashboard
- Fetches real-time weather from **OpenWeather API**.  
- Displays temperature, humidity, description, wind speed, and icon.  
- Clean card layout with dynamic updates.

### 💱 3. Currency Converter
- Converts between any two currencies using **ExchangeRate API**.  
- Includes dropdown menus for currency selection and instant conversion results.  
- Handles errors gracefully and updates live.

### 💭 4. Motivational Quote Generator
- Choose a topic (Motivation, Life, Success, etc.) from a dropdown.  
- Displays inspirational quotes with smooth animations.  
- Option to fetch new quotes instantly.

---

## 🛠️ Tech Stack

| Technology | Purpose |
|-------------|----------|
| **React.js** | Frontend framework |
| **Node.js + Express** | Backend server |
| **Framer Motion** | Animations |
| **OpenWeather API** | Weather data |
| **ExchangeRate API** | Currency conversion |
| **CSS (Custom)** | Styling and layout |
| **JavaScript (ES6)** | Logic and interactivity |

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository
```bash
git clone https://github.com/your-username/info-hub.git
cd info-hub

### 2️⃣ Install dependencies

For both client and server:

cd client
npm install
cd ../server
npm install

### 3️⃣ Configure environment variables

Inside the server folder, create a file named .env:

PORT=3001
OPENWEATHER_API_KEY=your_openweather_api_key_here
USE_MOCK=false

🧩 You can get a free API key from OpenWeather

### 4️⃣ Overall Complexity Rating

Technical: Medium

UI/UX: Medium

Integration: Medium

Final Grade of Complexity: Moderate – requires solid React, CSS, and API handling skills but doesn’t involve advanced algorithms or databases.

This is perfect for an assessment project: it demonstrates practical React skills, asynchronous API usage, state management, and clean UI/UX.

### 5️⃣ Run the app

Start both the server and client:
Server
cd server
npm start

Client
cd client
npm start

Then visit:
👉 http://localhost:3000

### 🖥️ Folder Structure
info-hub/
│
client/                            # React Frontend
│   ├── public/
│   │   ├── index.html
│   │   └── welcome.js
│   ├── src/
│   │   ├── index.js
│   │   ├── App.js
│   │   ├── App.css
│   │   ├── Weather.js
│   │   ├── Converter.js
│   │   ├── Quote.js
│   │   └── currencyList.js
│   └── package.json
│
└── server/               # Express Backend
    ├── index.js
    ├── .env
    └── package.json

### 🌈 Visual Experience

Full-screen layout with black neon theme.
Animated transitions between screens using Framer Motion.
Large, accessible buttons and cards for easy navigation.
Consistent design language across all tools.

### 📚 Learning Outcomes

Built and deployed a full-stack React + Node.js app.
Integrated multiple public APIs for live data.
Designed a modern, responsive, animated UI.
Implemented error handling, state management, and API fetch patterns.

### 👨‍💻 Developed By

Lihitha Gudla

For the ByteXL InfoHub Assessment

### 🏁 License
This project is developed for academic and demonstration purposes under ByteXL guidelines. 
