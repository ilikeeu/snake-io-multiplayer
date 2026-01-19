# 🐍 Snake.io Multiplayer

A real-time multiplayer snake game inspired by Slither.io. Eat, grow, survive!

![Game Screenshot](./docs/screenshot.png)

## 🎮 Play Now

**Live Demo:** [Coming Soon]

## ✨ Features

- 🌐 **Real-time Multiplayer** - Play with others using WebSocket
- 🎨 **Gradient Snakes** - Beautiful colorful snake rendering
- ⚡ **Power-ups** - Shield, Speed, Magnet, Slow Others
- 💀 **Death Drops** - Dead snakes become food
- 📱 **Mobile Support** - Touch controls + PWA
- 🏆 **Leaderboard** - Real-time score tracking

## 🛠️ Tech Stack

| Layer | Technology |
|-------|------------|
| Frontend | TypeScript, Vite, HTML5 Canvas |
| Backend | Node.js, Express, Socket.io |
| Styling | CSS3 |
| PWA | Vite PWA Plugin |

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/YOUR_USERNAME/snake-io-multiplayer.git
cd snake-io-multiplayer
```

2. Install dependencies:
```bash
# Install server dependencies
cd server
npm install

# Install client dependencies
cd ../client
npm install
```

3. Start development servers:

```bash
# Terminal 1: Start server
cd server
npm run dev

# Terminal 2: Start client
cd client
npm run dev
```

4. Open http://localhost:5173 in your browser

## 🎮 How to Play

- **Move**: Mouse cursor direction (or touch joystick on mobile)
- **Boost**: Hold Space or Left Click (or Boost button on mobile)
- **Goal**: Eat food to grow, avoid colliding with other snakes

### Power-ups

| Power-up | Effect |
|----------|--------|
| 🛡️ Shield | Invulnerable for 5 seconds |
| ⚡ Speed | 50% faster for 8 seconds |
| 🧲 Magnet | Attract nearby food for 10 seconds |
| 🐌 Slow Others | Slow all enemies for 6 seconds |

## 📁 Project Structure

```
snake-io-multiplayer/
├── client/          # Frontend (GitHub Pages)
│   ├── src/
│   │   ├── game/    # Game logic
│   │   ├── network/ # Socket.io client
│   │   └── ui/      # UI components
│   └── ...
├── server/          # Backend (Railway)
│   ├── src/
│   │   ├── game/    # Game server logic
│   │   └── network/ # Socket handlers
│   └── ...
└── shared/          # Shared types
```

## 🚢 Deployment

### Server (Railway)

1. Push to GitHub
2. Connect Railway to your repo
3. Set environment variable: `CLIENT_URL=https://YOUR_USERNAME.github.io/snake-io-multiplayer`
4. Deploy!

### Client (GitHub Pages)

1. Update `.env`:
```
VITE_SERVER_URL=https://your-server.railway.app
```

2. Build and deploy:
```bash
cd client
npm run build
# Push dist/ to gh-pages branch
```

## 📝 License

MIT License - feel free to use for your portfolio!

## 🙏 Credits

- Inspired by [Slither.io](http://slither.io)
- Built with [Socket.io](https://socket.io)
- Canvas rendering techniques from various tutorials

---

Made with ❤️ for my portfolio
