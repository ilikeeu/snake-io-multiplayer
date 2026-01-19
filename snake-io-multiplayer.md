# 🐍 Snake.io Multiplayer - Proje Planı

> **Proje Tipi:** WEB (Multiplayer Oyun)  
> **Hedef:** CV için GitHub Portfolio Projesi  
> **Deployment:** GitHub Pages (Frontend) + Railway (Backend)

---

## 🎯 Goal

Slither.io tarzında, gerçek zamanlı multiplayer bir web tabanlı yılan oyunu geliştirmek.

---

## ✅ Success Criteria

- [ ] Canlı multiplayer oyun çalışıyor (WebSocket)
- [ ] En az 10 oyuncu aynı anda oynayabiliyor
- [ ] Power-up sistemi çalışıyor (shield, speed, magnet, slow)
- [ ] Mobil cihazlarda touch kontrolü çalışıyor
- [ ] PWA olarak yüklenebiliyor
- [ ] GitHub Pages + Railway'de deploy edilmiş

---

## 📋 Tasks

### Phase 1: Setup
- [ ] 1.1 Initialize client (Vite + TypeScript)
- [ ] 1.2 Initialize server (Express + Socket.io)
- [ ] 1.3 Configure shared types
- [ ] 1.4 Setup .gitignore, README

### Phase 2: Server Core
- [ ] 2.1 GameServer class (game loop)
- [ ] 2.2 Player join/leave
- [ ] 2.3 Snake spawning
- [ ] 2.4 Snake movement (Slither.io style)
- [ ] 2.5 Food spawning (500 items)
- [ ] 2.6 Collision detection
- [ ] 2.7 Death → yem bırakma
- [ ] 2.8 Power-up system
- [ ] 2.9 Leaderboard
- [ ] 2.10 Broadcast state

### Phase 3: Client Core
- [ ] 3.1 Socket connection
- [ ] 3.2 Canvas setup
- [ ] 3.3 Renderer class
- [ ] 3.4 Camera (follow player)
- [ ] 3.5 Draw gradient snakes
- [ ] 3.6 Draw glowing foods
- [ ] 3.7 Draw power-ups
- [ ] 3.8 Mouse/keyboard input
- [ ] 3.9 Boost mechanic
- [ ] 3.10 Leaderboard UI

### Phase 4: Mobile & PWA
- [ ] 4.1 Virtual joystick
- [ ] 4.2 Touch input
- [ ] 4.3 Fullscreen toggle
- [ ] 4.4 PWA manifest
- [ ] 4.5 Service worker
- [ ] 4.6 Responsive CSS

### Phase 5: UI & Polish
- [ ] 5.1 Start menu
- [ ] 5.2 Death screen
- [ ] 5.3 Minimap (optional)
- [ ] 5.4 Sound effects (optional)
- [ ] 5.5 Smooth animations
- [ ] 5.6 Performance optimization

### Phase 6: Deployment
- [ ] 6.1 Railway config
- [ ] 6.2 Deploy server
- [ ] 6.3 Production URL
- [ ] 6.4 Build client
- [ ] 6.5 GitHub Pages deploy
- [ ] 6.6 README.md

---

## Done When

- [ ] 10+ oyuncu aynı anda oynayabiliyor
- [ ] Power-ups work correctly
- [ ] Mobile touch controls work
- [ ] PWA installable
- [ ] Deployed and live

---

## 🕐 Estimated: ~7.5 hours
