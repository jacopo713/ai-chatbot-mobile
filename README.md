# AI Chatbot Mobile App 🤖📱

App mobile React Native per il chatbot AI con mappe concettuali, costruita con Expo.

## 🚀 Funzionalità

- **Autenticazione Firebase** - Login/registrazione utenti
- **Chat AI in tempo reale** - Conversazioni con intelligenza artificiale  
- **Sincronizzazione cloud** - Dati condivisi con versione web
- **UI nativa** - Interfaccia ottimizzata per mobile
- **Memoria persistente** - Cronologia chat e preferenze

## 🛠 Setup Sviluppo

1. **Installa dipendenze:**
   ```bash
   npm install
   ```

2. **Configura environment:**
   ```bash
   cp .env.example .env
   # Modifica .env con le tue credenziali Firebase
   ```

3. **Avvia development server:**
   ```bash
   npx expo start
   ```

4. **Testa l'app:**
   - Scansiona QR code con Expo Go (Android/iOS)
   - Premi `a` per Android emulator
   - Premi `i` per iOS simulator

## 📦 Build Produzione

### Build APK (Android)
```bash
eas build --platform android --profile preview
```

### Build per Store
```bash
eas build --platform android --profile production
eas build --platform ios --profile production
```

## 🔧 Tecnologie

- **React Native** + **Expo** - Framework mobile
- **TypeScript** - Type safety
- **Firebase** - Autenticazione e database
- **React Navigation** - Navigazione app
- **EAS Build** - Build e deployment

## 🌐 Links

- **Versione Web:** [ChatMap Web](https://your-domain.com)
- **Backend API:** [Railway Backend](https://chatbot-cli-map-production.up.railway.app)
- **Expo Dashboard:** [Project Dashboard](https://expo.dev/accounts/jacopo96/projects/ai-chatbot-mobile)

## 📱 Download

Scansiona il QR code dalla sidebar del sito web o scarica l'APK direttamente:
[Download APK](https://expo.dev/accounts/jacopo96/projects/ai-chatbot-mobile/builds)
# Build ready! 🚀
