# 🔐 Kaneki x Beast

Modern web application with 3D elements, secure key system, and Discord bot integration.

## ✨ Features

- **🎮 Modern UI** - Beautiful animations with Framer Motion
- **🔒 Secure Key System** - reCAPTCHA v2 protection with anti-bypass
- **🤖 Discord Integration** - Automatic role management and commands
- **📱 Executor Showcase** - Mobile and desktop executor display
- **🛡️ Advanced Security** - HWID binding and behavior tracking
- **🌌 3D Graphics** - Three.js powered visual effects

## 🛠️ Tech Stack

- **Next.js 14** - React framework with SSR/SSG
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first styling
- **Framer Motion** - Smooth animations
- **Three.js** - 3D graphics and effects
- **Discord.js** - Bot integration
- **reCAPTCHA v2** - Human verification

## 🚀 Quick Start

```bash
# Clone the repository
git clone <repository-url>
cd kaneki-x-beast

# Install dependencies
npm install

# Install key system dependencies
cd key-system && npm install && cd ..

# Install Discord bot dependencies  
cd discord-bot && npm install && cd ..

# Start all services
npm run dev
```

## 📱 Access Points

- **Main Application:** http://localhost:3001
- **Key System:** http://localhost:3002
- **Discord Bot:** Runs automatically in background

## ⚙️ Environment Configuration

Configure your environment variables in `key-system/next.config.js`:

```javascript
// Required configurations
NEXT_PUBLIC_RECAPTCHA_SITE_KEY: 'your-recaptcha-site-key'
RECAPTCHA_SECRET_KEY: 'your-recaptcha-secret-key'
DISCORD_BOT_TOKEN: 'your-discord-bot-token'
DISCORD_WEBHOOK_URL: 'your-webhook-url'
DISCORD_PREMIUM_ROLE_ID: 'your-premium-role-id'
DISCORD_GUILD_ID: 'your-guild-id'
```

## 🎯 Usage Flow

1. **Visit Key System** - Complete security verification
2. **Get Premium Key** - Receive time-limited access token
3. **Discord Integration** - Use bot commands for role management
4. **Access Premium Features** - Unlock exclusive executor content

## 🔧 Available Scripts

```bash
npm run dev          # Start all services (recommended)
npm run dev:main     # Main application only
npm run dev:keys     # Key system only
npm run dev:bot      # Discord bot only
npm run build        # Production build
npm run build:both   # Build both applications
```

## 🏗️ Project Structure

```
kaneki-x-beast/
├── components/           # Reusable React components
├── pages/               # Main application pages
├── key-system/          # Separate key management system
│   ├── pages/           # Key system pages
│   ├── utils/           # Security utilities
│   └── public/          # Static assets
├── discord-bot/         # Discord bot integration
└── public/              # Main app static files
```

## 🔒 Security Features

- **reCAPTCHA v2** human verification
- **HWID fingerprinting** for device binding
- **Anti-bypass protection** against automation
- **Rate limiting** and behavior analysis
- **Secure token management** with JWT
- **Cross-site protection** headers

## 📄 License

This project is private and proprietary to the Kaneki x Beast community.

---

⭐ **Built with modern web technologies for optimal performance and security.**