# Mara Voss Portfolio — Design System

Single source of truth for visual and motion conventions. All agents and contributors must follow this document.

## Creative Direction

- **Artist:** Mara Voss, fine-art and editorial photographer
- **Home approach:** Full-bleed still hero image (no autoplay video) plus curated 6–8 image preview with caption-on-hover
- **Philosophy:** Image-first, quiet UI. The work carries color; chrome stays near-monochrome.

## Color Tokens

Defined in `tailwind.config.js` — **never hardcode hex values in components**.

| Token   | Usage |
|---------|-------|
| `ink`   | Primary text, dark overlays, nav on light backgrounds |
| `paper` | Page background, light text on dark overlays |
| `mist`  | Secondary text, captions, metadata, borders |
| `accent`| Oxidized bronze — links, focus rings, active filter states, CTAs |

Contrast: Text on `paper` uses `ink` (WCAG AA). Overlay text on hero images uses `paper` with a semi-transparent `ink` scrim behind when needed.

## Typography

Loaded via Google Fonts in `src/index.css`.

| Role | Font | Tailwind class | Usage |
|------|------|----------------|-------|
| Headings | Cormorant Garamond | `font-serif` | Page titles, project names, hero statements |
| Body / UI | Outfit | `font-sans` | Body copy, nav, forms, captions, buttons |

- Headings: `font-medium` to `font-semibold`, tight tracking on large sizes
- UI chrome: `font-light`, `tracking-widest`, `uppercase`, `text-sm`
- Body: `font-normal`, `leading-relaxed`, `text-base` to `text-lg`

## Spacing Scale

Use Tailwind defaults consistently:

- Section vertical padding: `py-16 md:py-24 lg:py-32`
- Horizontal page padding: `section-padding` utility (`px-5 sm:px-8 lg:px-12 xl:px-16`)
- Component gaps: `gap-4`, `gap-6`, `gap-8`, `gap-12`
- Max content width: `max-w-7xl mx-auto` for text-heavy sections

## Motion & Animation

All motion is restrained — gallery site, not landing page.

| Property | Value |
|----------|-------|
| Duration | `400ms` (`duration-reveal`) |
| Easing | `cubic-bezier(0, 0, 0.2, 1)` (`ease-reveal`) |
| Scroll reveal | Fade + translate Y `20px` → `0` |
| Image hover scale | `1.03` |
| Lightbox open | Fade + scale `0.95` → `1` |
| Filter transition | AnimatePresence with opacity + scale |
| Parallax | **None** |

Framer Motion defaults: `transition={{ duration: 0.4, ease: [0, 0, 0.2, 1] }}`

## Image Treatment

- Hover: subtle scale (`1.03`), optional caption fade-in
- Lazy load: `loading="lazy"` on all non-hero images
- Alt text: descriptive, never filename-based
- Masonry: CSS columns with `break-inside: avoid`; varied aspect ratios preserved

## Navigation

- Minimal overlay wordmark + links
- Hamburger menu on mobile; compact horizontal nav on desktop
- Low visual weight: thin type, generous spacing, no heavy backgrounds
- Sticky or fixed with transparent → subtle backdrop on scroll (optional)

## Lightbox

- Custom build (no heavy library)
- Fade/scale transition on open/close
- Keyboard: `ArrowLeft`/`ArrowRight` navigate, `Escape` closes
- Focus trap while open
- Visible close button with `aria-label`
- Captions below or overlaid with scrim

## Media Players

- **Video:** Custom controls, poster, lazy load, no autoplay, aspect-ratio container
- **Audio:** No native browser UI; play/pause, scrub bar, time display, static waveform bars

## Accessibility

- One `<h1>` per page
- Semantic landmarks: `<main>`, `<nav>`, `<footer>`, `<section>`
- All form inputs have associated `<label>` elements
- Custom controls: `aria-label`, keyboard operable
- Focus: `focus-ring` utility (accent ring, offset)
- WCAG AA contrast minimum

## How Minimal Is Minimal

- No decorative gradients except subtle hero scrims
- No drop shadows except lightbox/modals
- No card borders unless separating form sections
- UI type stays small and uppercase for nav/filters
- Imagery is always the largest visual element on any page
