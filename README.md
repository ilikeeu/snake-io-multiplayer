# 🐍 Snake.io Multiplayer

A modern, real-time multiplayer snake game inspired by Slither.io. Eat, grow, and survive against other players and smart bots!

🎮 **Play Now:** [Live Demo](https://m0Corut.github.io/snake-io-multiplayer/)

## ✨ Features

- 🌐 **Real-time Multiplayer** - Seamless gameplay with Socket.io
- 🤖 **Smart AI Bots** - Server-side bots using Behavior Trees
- 🎨 **Skin System** - 10 colors & 8 patterns to customize your snake
- ⚡ **Power-ups** - Shield 🛡️, Speed ⚡, Magnet 🧲, Slow 🐌
- 💀 **Death Mechanics** - Dead snakes drop food for others
- 📱 **Mobile Support** - Touch controls & Virtual Joystick
- 🏆 **Leaderboard** - Real-time score tracking

## 🛠️ Tech Stack

### Frontend
- **TypeScript** & **Vite**
- **HTML5 Canvas** for high-performance rendering
- **Socket.io Client** for real-time communication

### Backend
- **Node.js** & **Express**
- **Socket.io** for WebSocket management
- **Physics Engine** (Custom collision detection)

## 🚀 Getting Started

To run this project locally:

1. **Clone the repository**
   ```bash
   git clone https://github.com/m0Corut/snake-io-multiplayer.git
   cd snake-io-multiplayer
   ```

2. **Start the Server** (Port 3000)
   ```bash
   cd server
   npm install
   npm run dev
   ```

3. **Start the Client** (Port 5173)
   Open a new terminal:
   ```bash
   cd client
   npm install
   npm run dev
   ```

4. Open `http://localhost:5173` in your browser.

## 🚢 Deployment

- **Server:** Deployed on **Railway**
- **Client:** Deployed on **GitHub Pages**

## 📝 License

This project is open source and available under the MIT License.

---

Made with ❤️ by [Muhammet Corut](https://github.com/m0Corut)
