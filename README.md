# Paradise Wire Recycling Industry - Website

A modern, responsive React website for Paradise Wire Recycling Industry built with Vite, showcasing sustainable metal recycling services with a dark industrial theme.

## 🚀 Live Demo

Deployed at: `https://dev.opendesignsin.com/paradise/`

## 📋 Features

### ✨ Sections Implemented

1. **Video Intro Section** - Full-screen video background with animated text overlay
2. **02 Decades Section** - 12-column grid layout showcasing company history
3. **Stats Section** - Animated counter statistics with scroll triggers
4. **Division Slider** - Swiper.js powered slider showcasing three divisions
5. **Products & Materials** - Two-column layout for buy/sell items
6. **Process & Technology** - Split layout highlighting European recycling systems
7. **Sustainability** - Image collage with CSR information
8. **Clients** - Logo grid with hover effects
9. **Final CTA** - Call-to-action section with contact information
10. **Footer** - Comprehensive footer with links and social media

### 🎨 Design Features

- Dark industrial theme with copper/orange accents
- Sticky navigation header
- Smooth scrolling behavior
- Framer Motion animations
- Mobile-first responsive design
- Scroll-to-top button

## 🛠️ Tech Stack

- **Framework:** Vite + React 18
- **Routing:** React Router DOM
- **Styling:** Tailwind CSS v3
- **Slider:** Swiper.js
- **Animations:** Framer Motion
- **Icons:** React Icons

## 📦 Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🔧 Configuration

### Base Path

The application is configured to run under the `/paradise/` base path:

- **vite.config.js:** `base: '/paradise/'`
- **React Router:** `basename="/paradise"`

### Tailwind Theme

Custom colors defined in `tailwind.config.js`:

```javascript
colors: {
  copper: {
    DEFAULT: '#B87333',
    light: '#D4A574',
    dark: '#8B4513',
  },
  industrial: {
    DEFAULT: '#1a1a1a',
    light: '#2d2d2d',
    dark: '#0f0f0f',
  }
}
```

## 🌐 Deployment

### For Production

1. Build the project:
   ```bash
   npm run build
   ```

2. The `dist` folder contains the production-ready files

3. Deploy to a web server with the base path `/paradise/`

4. Ensure the server is configured to handle React Router (redirect all routes to index.html)

### Server Configuration

For proper React Router functionality, configure your server:

**Nginx:**
```nginx
location /paradise/ {
    try_files $uri $uri/ /paradise/index.html;
}
```

**Apache (.htaccess):**
```apache
RewriteEngine On
RewriteBase /paradise/
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule . /paradise/index.html [L]
```

## 📁 Project Structure

```
src/
├── components/
│   ├── layout/
│   │   ├── Header.jsx          # Sticky navigation
│   │   ├── Footer.jsx          # Site footer
│   │   └── ScrollToTop.jsx     # Scroll button
│   └── sections/
│       ├── IntroSection.jsx           # Video intro
│       ├── DecadesSection.jsx         # 12-grid layout
│       ├── StatsSection.jsx           # Animated stats
│       ├── DivisionSection.jsx        # Swiper slider
│       ├── ProductsSection.jsx        # Products listing
│       ├── ProcessSection.jsx         # Process info
│       ├── SustainabilitySection.jsx  # CSR content
│       ├── ClientsSection.jsx         # Client logos
│       └── FinalCTASection.jsx        # Contact CTA
├── pages/
│   └── Home.jsx                # Main page component
├── App.jsx                     # Root component
├── main.jsx                    # Entry point
└── index.css                   # Global styles
```

## 🎯 Requirements Met

✅ Video intro (not image)  
✅ 12-column grid for decades section  
✅ Swiper.js slider for divisions (not static cards)  
✅ Base path `/paradise/` configured  
✅ No absolute root paths  
✅ React Router with proper basename  
✅ All required sections implemented  
✅ Mobile-first responsive design  
✅ Dark theme with copper accents  
✅ Smooth animations with Framer Motion  

## 🔒 Security

- ✅ No security vulnerabilities (CodeQL verified)
- ✅ No inline styles or unsafe patterns
- ✅ All dependencies up to date

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📄 License

Copyright © 2026 Paradise Wire Recycling Industry. All rights reserved.

## 🤝 Contributing

This is a client project. For any issues or updates, please contact the development team.

---

Built with ❤️ using Vite + React
