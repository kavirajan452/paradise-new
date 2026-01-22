# Paradise - Wire Recycling Industry

A modern Vite + React front-end for Paradise, featuring a centered-logo sticky navbar and a full-bleed hero section with background video.

## Features

- **Sticky Navbar**: Full-width navigation with centered logo and distributed menu items
  - Left menu: ABOUT US, DIVISIONS
  - Right menu: PRODUCTS FOR SALE, CONTACT US
  - Mail icon (left) and hamburger menu (right)
  - Scrolled state with backdrop blur
  - Mobile drawer with accessibility features

- **Hero Section**: Full-screen hero with video background
  - Autoplay background video with muted loop
  - Fallback to poster image on mobile/blocked autoplay
  - Split headline layout: "TURNING" / "SCRAP INTO"
  - Large centered "SUSTAINABILITY" headline
  - Orange label bar with descriptive tagline
  - Smooth entrance animations

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

```bash
# Install dependencies
npm install
```

### Development

```bash
# Start development server
npm run dev
```

The app will be available at `http://localhost:5173/`

### Build

```bash
# Build for production
npm run build
```

### Preview Production Build

```bash
# Preview production build locally
npm run preview
```

## Project Structure

```
paradise-new/
├── public/
│   ├── logo.svg              # Paradise logo
│   └── video/
│       ├── hero.mp4          # Background video (placeholder)
│       ├── hero-poster.jpg   # Video poster fallback (placeholder)
│       └── README.txt        # Asset instructions
├── src/
│   ├── components/
│   │   ├── Navbar.jsx        # Navigation component
│   │   ├── Navbar.css        # Navigation styles
│   │   ├── Hero.jsx          # Hero section component
│   │   └── Hero.css          # Hero styles
│   ├── App.jsx               # Main app component
│   ├── App.css               # App styles
│   ├── main.jsx              # React entry point
│   └── index.css             # Global styles & CSS variables
├── index.html                # HTML entry point
├── vite.config.js            # Vite configuration
└── package.json              # Dependencies & scripts
```

## Asset Locations

### Logo
- Location: `/public/logo.svg`
- A simple SVG placeholder - replace with actual Paradise logo

### Video Assets
- Video: `/public/video/hero.mp4` (placeholder - needs production video)
- Poster: `/public/video/hero-poster.jpg` (placeholder - needs production image)

For production, replace these placeholder files with:
- **hero.mp4**: Full-bleed background video showing copper/steel recycling operations
- **hero-poster.jpg**: High-quality still frame from the video

## Styling

The project uses vanilla CSS with CSS variables for easy customization:

- **Colors**: Defined in `src/index.css` (--orange, --nav-bg, etc.)
- **Fonts**: Google Fonts (Oswald for headlines, Montserrat for body text)
- **Responsive**: Mobile-first approach with breakpoints at 768px and 1024px

## Browser Support

- Modern browsers with ES6+ support
- Automatic video fallback for browsers/devices that block autoplay
- Accessible keyboard navigation and ARIA attributes

## Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint

## License

Private repository for Paradise Wire Recycling Industry.
