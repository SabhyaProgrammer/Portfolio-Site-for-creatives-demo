# Mara Voss Portfolio Demo

A fine-art and editorial photography portfolio built with **Vite**, **React**, **Tailwind CSS v3**, **React Router**, and **Framer Motion**. Designed as a realistic demo for creative freelancers — image-first, quiet UI, full masonry gallery, lightbox, and custom media players.

## Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Production Build

```bash
npm run build
npm run preview
```

## Routes

| Route | Page |
|-------|------|
| `/` | Home — full-bleed hero + featured work preview |
| `/work` | Masonry gallery with category filtering + lightbox |
| `/work/:projectSlug` | Project detail with image set, video/audio where applicable |
| `/about` | Bio, clients, publications, process |
| `/contact` | Validated contact form + direct contact info |

## Project Structure

```
src/
├── components/     # Reusable UI (Navbar, Lightbox, players, etc.)
├── data/           # Content — edit these to update the site
│   ├── projectsData.js
│   └── aboutData.js
├── pages/          # Route-level page components
├── App.jsx         # Layout shell (Navbar + Outlet + Footer)
├── router.jsx      # React Router configuration
└── index.css       # Tailwind + Google Fonts imports
public/
└── media/          # Local video/audio files
DESIGN_SYSTEM.md    # Colors, fonts, motion — single source of truth
```

## Adding a New Project

Edit `src/data/projectsData.js`:

```js
{
  slug: 'my-new-project',        // URL: /work/my-new-project
  title: 'My New Project',
  category: 'Editorial',         // Must match a filter category
  year: 2025,
  description: 'Two to four sentences about the project.',
  heroImage: { src: '...', alt: '...' },
  images: [
    { src: '...', alt: '...', aspectRatio: 0.75, caption: 'Optional caption' },
  ],
  video: null,                   // or { src, poster, alt }
  audio: null,                   // or { src, title }
}
```

The gallery on `/work` automatically includes all images from every project. Categories are defined in the `categories` array at the top of the same file.

## Swapping Placeholder Media

### Images
Replace Unsplash URLs in `projectsData.js` with:
- Local files in `public/` (reference as `/images/my-photo.jpg`)
- Your CDN or hosting URLs

Always include descriptive `alt` text and an accurate `aspectRatio` (width ÷ height) for proper masonry layout.

### Video & Audio
Place files in `public/media/` and reference them:

```js
video: { src: '/media/reel.mp4', poster: '/media/reel-poster.jpg', alt: '...' }
audio: { src: '/media/ambient.mp3', title: 'Track title' }
```

Current demo files:
- `sample-video.mp4` — MDN CC0 sample (flower.mp4)
- `sample-audio.mp3` — MDN CC0 sample

## Adjusting Theme (Colors & Typography)

All design tokens live in `tailwind.config.js`:

```js
colors: {
  ink: '#1a1a18',      // primary text
  paper: '#f5f2eb',    // background
  mist: '#8a8680',     // secondary text
  accent: '#8b6914',   // oxidized bronze accent
},
fontFamily: {
  serif: ['"Cormorant Garamond"', ...],  // headings
  sans: ['Outfit', ...],                  // body/UI
},
```

**Do not hardcode hex values in components** — use Tailwind token classes (`text-ink`, `bg-paper`, etc.).

Fonts are loaded in `src/index.css` via Google Fonts. See `DESIGN_SYSTEM.md` for motion, spacing, and accessibility conventions.

## Contact Form Integration

`src/components/ContactForm.jsx` contains a commented `submitContactForm()` placeholder. Replace the simulated delay with your preferred service:

- [Formspree](https://formspree.io/)
- [EmailJS](https://www.emailjs.com/)
- Custom API endpoint

## Tech Stack

- [Vite](https://vitejs.dev/) 6
- [React](https://react.dev/) 18
- [Tailwind CSS](https://tailwindcss.com/) 3
- [React Router](https://reactrouter.com/) 6
- [Framer Motion](https://www.framer.com/motion/) 11

## License

See [LICENSE](LICENSE).
