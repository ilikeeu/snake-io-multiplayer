# 🚀 Snake.io Multiplayer Deployment Rehberi

Oyununuzu tüm dünyayla paylaşmak için aşağıdaki adımları takip edin.

## Genel Bakış
1. **Server (Arka Uç):** Railway üzerinde çalışacak.
2. **Client (Ön Yüz):** GitHub Pages üzerinde çalışacak.

---

## Adım 1: Projeyi GitHub'a Yükleyin

1. GitHub'da `snake-io-multiplayer` adında boş bir repo oluşturun.
2. Bu klasörde terminali açın ve şu komutları girin:

```bash
git init
git add .
git commit -m "Initial commit - Snake.io Multiplayer Game"
git branch -M main
git remote add origin https://github.com/KULLANICI_ADINIZ/snake-io-multiplayer.git
git push -u origin main
```

*(Not: `KULLANICI_ADINIZ` kısmını kendi GitHub kullanıcı adınızla değiştirin.)*

---

## Adım 2: Server'ı Railway'e Deploy Edin

Railway, Node.js server'ınızı ücretsiz (veya düşük maliyetle) barındırmak için harika bir servistir.

1. [Railway.app](https://railway.app/) adresine gidin ve GitHub ile giriş yapın.
2. **"New Project"** -> **"Deploy from GitHub repo"** seçeneğine tıklayın.
3. Az önce oluşturduğunuz `snake-io-multiplayer` reposunu seçin.
4. **"Variables"** sekmesine gidin ve "New Variable" diyerek şunu ekleyin:
   - `PORT`: `3000` (veya Railway'in önerdiği port)
5. **"Settings"** sekmesine gidin ve **"Root Directory"** kısmını `/server` olarak ayarlayın. (Çünkü server dosyaları bu klasörde).
6. **"Generate Domain"** butonuna tıklayarak server'ınız için bir URL alın (örn: `https://snake-server-production.up.railway.app`).
   - **BU URL'İ KOPYALAYIN**, bir sonraki adımda lazım olacak.

Deployment'ın bitmesini bekleyin (yeşil tik ✅).

---

## Adım 3: Client'ı Server'a Bağlayın

Şimdi Client'ın nereye bağlanacağını söylemeliyiz.

1. Bilgisayarınızda `client/.env` adında bir dosya oluşturun (yoksa).
2. İçine Railway'den aldığınız URL'i yapıştırın (sonunda `/` olmasın):

```env
VITE_SERVER_URL=https://snake-server-production.up.railway.app
```

3. Bu değişikliği GitHub'a gönderin:

```bash
git add client/.env
git commit -m "Add production server URL"
git push
```

*(Not: `.env` dosyası `.gitignore` içinde olabilir. Eğer öyleyse, bu adımı GitHub Pages ayarlarında Environment Variable ekleyerek yapamayız çünkü GitHub Pages statik site. Bu yüzden `client/src/main.ts` içinde default URL'i değiştirmek veya `.env.production` dosyasını commitlemek gerekebilir. En garantisi `.env.production` dosyası oluşturup git'e atmaktır.)*

**Alternatif (Daha Kolay):**
`snake-io-multiplayer/client/.env.production` dosyası oluşturun ve şunu yazın:
```
VITE_SERVER_URL=https://snake-server-production.up.railway.app
```
Sonra bunu pushlayın.

---

## Adım 4: Client'ı GitHub Pages'e Deploy Edin

Client'ı statik site olarak yayınlayacağız.

1. `client/package.json` dosyasını açın.
2. `scripts` kısmına şu satırı ekleyin (eğer yoksa):
   `"deploy": "gh-pages -d dist"`
3. `gh-pages` paketini yükleyin (çalıştığınız terminalde):
   `npm install gh-pages --save-dev`
4. Client klasörüne gidin: `cd client`
5. GitHub Pages için bi base path ayarı gerekebilir. `vite.config.ts` dosyasında `base` ayarını repo isminiz yapın:
   ```ts
   base: '/snake-io-multiplayer/',
   ```
6. Şimdi deploy edin:
   ```bash
   npm run build
   npx gh-pages -d dist
   ```

Tebrikler! 🚀 Oyununuz artık `https://KULLANICI_ADINIZ.github.io/snake-io-multiplayer/` adresinde yayında! Arkadaşlarına linki at ve kapışmaya başla!
