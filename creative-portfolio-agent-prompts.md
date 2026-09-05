# Agent Build Prompt: Personal Portfolio for a Creative Professional

Copy everything below into your Antigravity agent as the task prompt.

---

## ROLE & CONTEXT

You are an expert full-stack web developer and UI/UX designer building a **portfolio demo website** for a freelance web developer. This is a fictional but highly realistic personal portfolio site for **"Mara Voss"**, a fine-art and editorial photographer (you may keep this concept or substitute an equally strong alternative — illustrator or musician — but state your choice clearly if you change it; the spec below assumes photographer, adjust media types accordingly if you switch). The purpose is to demonstrate mastery of image-heavy layouts, media handling, and lightweight but tasteful animation to prospective clients (real photographers, illustrators, musicians, and other visual/creative freelancers looking for a personal site).

Treat this as if a real working artist is paying for it. The work itself (the imagery, the way it's presented) must be the star — the UI should feel like it disappears in service of the content, the way the best portfolio sites do (thinking: Cargo Collective, Format, Squarespace's best creative templates, or bespoke agency work for photographers).

## TECH STACK REQUIREMENTS

- Use **React** (functional components, hooks) with **Vite**.
- Use **Tailwind CSS** for styling. Avoid generic component-library defaults — this needs an editorial, gallery-like visual identity.
- Use **Framer Motion** for scroll reveals, image hover states, and page/section transitions. Motion should be lightweight and elegant — this is not a landing page full of flashy effects, it's a gallery. Restraint is a feature.
- Use **React Router** for multi-page navigation: Home, Work/Gallery (with project detail views), About, Contact.
- For video: use the native HTML5 `<video>` element with custom-styled controls (or a lightweight wrapper), supporting a poster image and lazy loading behavior. For audio: build a custom minimal audio player component (play/pause, scrub bar, current time) rather than relying on default browser audio controls, which look inconsistent and unpolished.
- Contact form: functional front-end validation, simulated submission with loading + success state, and a clearly commented placeholder function `submitContactForm()` where a real integration (Formspree, EmailJS, custom backend) would go.
- Ensure the codebase is clean, modular, and well-commented as if handing off to another developer or client.

## SITE STRUCTURE & PAGES

### 1. Home Page
- Full-bleed, high-impact opening — either a single hero image/video loop or an immediate masonry preview grid of standout work (your creative call — state which direction you chose and why).
- Minimal navigation overlay (name/wordmark, nav links, possibly a hamburger even on desktop for that gallery-site feel) — nav should not compete visually with the imagery.
- A short curated selection of 6-8 standout images/projects with a distinctive hover interaction (e.g., subtle zoom, caption reveal, cursor-follow effect) linking through to the full Work page or individual project pages.
- A brief one-line artist statement or tagline — restrained, not a full bio (save that for About).
- Footer or bottom section with contact CTA and social links.

### 2. Work / Gallery Page
- The centerpiece of the site. Build a true **masonry grid** layout (varied image aspect ratios, Pinterest-style, not a uniform square grid) that is genuinely responsive — recalculating columns cleanly at each breakpoint (e.g., 1 column mobile, 2 columns tablet, 3-4 columns desktop).
- Support filtering by category/series (e.g., "Portraits," "Editorial," "Travel," "Personal Work") via a clean filter/tab control above the grid — filtering should animate items in/out smoothly, not just hard-cut.
- Each grid item on click/tap opens either: (a) a full lightbox with next/prev navigation and captions, or (b) a dedicated project detail page/route with a larger image set, project description, and metadata (client, year, category) — build option (b) as the primary approach since it demonstrates more range, but include lightbox behavior within it too for viewing images at full size.
- Lazy-load all images, use appropriate `srcset`/sizing consideration or at least `loading="lazy"`, and ensure smooth perceived performance (skeleton/blur-up placeholders while images load is a nice touch — implement if reasonable).
- Minimum 20+ images across at least 4 categories/series for a genuinely portfolio-feeling grid.

### 3. Project Detail Page (dynamic route, e.g., `/work/:projectSlug`)
- Large hero image or short embedded video for the project.
- Project title, category, year, short description/context (2-4 sentences written in a genuine, specific voice — not generic "this project explores light and shadow" filler; give it real specificity).
- Full image set for the project in a clean single-column or two-column large-image layout (this is a slower, more deliberate scroll experience than the grid).
- At least one project should include an embedded video (e.g., a behind-the-scenes reel or a video reel component) and at least one should include the custom audio player (e.g., if positioning as a musician-adjacent project, or ambient audio/interview clip accompanying a shoot) — include both media types somewhere across the project pages even if the overall site leans photography, to demonstrate full media-handling range.
- Simple "Next Project" / "Previous Project" navigation at the bottom to encourage continued browsing.

### 4. About Page
- A well-composed portrait/headshot placeholder image alongside a genuine, specific bio (background, style, notable clients or publications — fabricated but realistic, e.g., "featured in [fictional publication]," "clients include [fictional brands]").
- A "Selected Clients / Publications" list or logo row (placeholder wordmarks/text, not real brand names/logos).
- Optional: a short "process" or "philosophy" section — how they approach their work — written with genuine voice, not corporate-sounding.
- A downloadable resume/CV placeholder link or press kit mention (can be a non-functional or dummy-linked button, clearly commented).

### 5. Contact Page
- Clean, minimal contact form (Name, Email, Subject/Project Type dropdown, Message) with validation, loading state, and success confirmation.
- Direct contact info (email, possibly phone or location/timezone note relevant to a freelance creative), and social/portfolio links (Instagram, Behance, etc. — placeholder links).
- Consider a simple, tasteful background treatment or large typographic element here rather than a bare form on white — this page shouldn't feel like an afterthought.

## MEDIA HANDLING REQUIREMENTS (CORE FOCUS OF THIS DEMO)

- **Masonry/grid layout:** must genuinely reflow based on image aspect ratios, not force-crop everything into uniform squares (unless that's a deliberate, stated creative choice for a specific section).
- **Lightbox:** smooth open/close transition (scale/fade from the clicked thumbnail's position is a nice advanced touch if feasible), next/prev navigation, keyboard support (arrow keys, Escape), captions, and a visible close affordance. Build this yourself or use a lightweight library (e.g., `yet-another-react-lightbox`) — your call.
- **Video:** custom-styled player controls, poster images, lazy loading (don't autoplay heavy video without user intent — respect performance and user control), responsive aspect-ratio containers (no layout shift when video loads).
- **Audio:** fully custom player UI (no default browser controls) — play/pause button, progress/scrub bar, current time / duration display, and a simple waveform-style visual treatment if you want to push the polish further (can be a static styled bar if a real waveform is too complex, just don't ship the raw default HTML5 audio element).
- Use royalty-free/placeholder image sources (Unsplash source URLs or picsum.photos with photography-relevant seeds) and placeholder/sample video and audio files (short, freely-licensed sample clips or clearly labeled dummy files) — do not use any copyrighted client work or real photographer portfolios.

## DESIGN DIRECTION

- Aesthetic: editorial, gallery-forward, quiet confidence. Generous negative space, a restrained color palette (often near-monochrome — black/white/one accent — to let imagery carry color), and strong but understated typography (a distinctive serif or refined sans for headings, paired with a clean body font).
- Motion should be lightweight: subtle fade/slide reveals on scroll, gentle hover states on images (slight scale, caption fade-in), smooth page transitions between routes if feasible. No heavy parallax gimmicks or busy animation — the imagery should always be the focus.
- Navigation and UI chrome should be minimal and unobtrusive — thin type, low visual weight, plenty of breathing room — so it never competes with the visual work.
- Give real thought to image aspect ratio variety in your placeholder choices — mixing portrait, landscape, and square images is what makes a masonry grid feel alive rather than mechanical.

## RESPONSIVENESS & ACCESSIBILITY (NON-NEGOTIABLE)

- True mobile-first build: design and test at 375px, 768px, 1024px, and 1440px breakpoints minimum. Masonry grid column count must adapt cleanly at each.
- All interactive elements (nav, filters, lightbox, video/audio players, forms) must work correctly with touch input.
- Semantic HTML throughout, one `<h1>` per page, logical heading hierarchy.
- All images require descriptive `alt` text (genuinely descriptive, not "image1.jpg" — write real short captions/descriptions).
- Video/audio players must be operable via keyboard and have appropriate `aria-label`s on custom controls.
- Forms have associated `<label>` elements (visually hidden acceptable but must exist for screen readers).
- Sufficient color contrast (WCAG AA minimum) — pay particular attention to any text overlaid on images.
- Keyboard navigability throughout, including the lightbox (arrow keys, Escape) and filter tabs, with visible custom focus states matching the minimal aesthetic.

## PERFORMANCE & CODE QUALITY

- No console errors or warnings on build or in dev mode.
- Split code sensibly into components (`Navbar.jsx`, `MasonryGrid.jsx`, `GalleryItem.jsx`, `Lightbox.jsx`, `VideoPlayer.jsx`, `AudioPlayer.jsx`, `ProjectDetail.jsx`, `ContactForm.jsx`, `Footer.jsx`, etc.) — no giant monolithic page files.
- Externalize project/image data into a `projectsData.js` file (array of project objects, each with an array of image/media objects) so a real client could add new work without touching component logic. Comment this clearly.
- Include a clean `README.md` explaining: how to run the project locally, how to add a new project/gallery entry, how to swap placeholder images/media for real client files, and how to adjust the color/type theme.
- Ensure the project builds successfully with `npm run build` with zero errors before considering the task complete.

## DELIVERABLE CHECKLIST — VERIFY BEFORE FINISHING

- [ ] Home, Work/Gallery, Project Detail, About, and Contact pages all implemented and linked
- [ ] True masonry/reflowing grid layout, responsive across breakpoints, with category filtering
- [ ] Lightbox with next/prev nav, captions, and keyboard support
- [ ] At least one project includes embedded video with custom-styled controls
- [ ] At least one project includes a fully custom audio player (no default browser UI)
- [ ] 20+ images across 4+ categories, varied aspect ratios
- [ ] Contact form fully validated with loading/success states
- [ ] Project/media data externalized into a data file
- [ ] Fully responsive at all breakpoints
- [ ] Accessible: semantic HTML, real alt text, labeled forms, keyboard support, visible focus states, adequate contrast
- [ ] No console errors, successful production build
- [ ] README written
- [ ] Visual design feels like a genuine working artist's site — quiet, confident, image-first — not a generic template

## FINAL INSTRUCTION

Before writing code, briefly outline your component architecture and confirm the creative direction (artist name/discipline, color palette, font pairing, home page approach) in 4-6 sentences. Then proceed to build the full project. If you must make an assumption due to ambiguity, state the assumption inline as a code comment rather than stopping to ask — prioritize shipping a complete, working, polished result.

---
---

# Multi-Agent Build Plan: Mara Voss Portfolio Demo

Feed these to Antigravity in order. Every downstream agent (2-6) should also receive the **Shared Design & Quality Context** block below — this prevents visual/style drift across parallel agents.

---

## SHARED DESIGN & QUALITY CONTEXT
*(Paste this into every agent's prompt, agents 2 through 6)*

You are contributing to a larger portfolio demo project: a personal portfolio site for photographer "Mara Voss" (or the artist/discipline established by the Foundation Agent — check `DESIGN_SYSTEM.md` first if it exists in the repo). This must feel like a genuine working artist's site — quiet, confident, image-first — not a generic template.

Non-negotiable standards for anything you build:
- Follow `DESIGN_SYSTEM.md` exactly for colors, fonts, spacing, and animation/motion conventions. Do not introduce new colors or fonts.
- Mobile-first responsive: test/design for 375px, 768px, 1024px, 1440px.
- Semantic HTML, logical heading hierarchy, real descriptive alt text (not "image1.jpg"), labeled form inputs, visible custom focus states, WCAG AA contrast (pay attention to any text over images).
- Motion should be lightweight and restrained — subtle fade/slide reveals, gentle hover states. This is a gallery site, not a landing page; the imagery is always the focus, never the animation.
- Comment your code clearly, as if handing off to another developer.
- Only touch the files/folders explicitly assigned to you below. If you need something from another agent's scope that doesn't exist yet, create a minimal placeholder version, clearly comment it as a placeholder, and note it in your summary.
- No console errors. Your piece must build cleanly on its own within the larger project.

---

## AGENT 1 — FOUNDATION (runs first, alone, nothing else starts until this is done)

**Scope:** Project scaffold, theme, routing skeleton, shared layout components.

**Files you own:** `vite.config.js`, `tailwind.config.js`, `src/main.jsx`, `src/App.jsx`, `src/index.css`, `src/components/Navbar.jsx`, `src/components/Footer.jsx`, `src/router.jsx` (or equivalent), `DESIGN_SYSTEM.md`.

**Task:**
1. Scaffold a Vite + React project with Tailwind CSS configured.
2. Decide and lock in the creative direction: artist name/discipline (Mara Voss/photographer, or your own alternative — illustrator/musician), color palette (restrained, often near-monochrome with one accent, letting imagery carry color), font pairing (distinctive serif or refined sans for headings via Google Fonts + clean readable body font). Extend `tailwind.config.js` with named custom color tokens and font families — no hardcoded hex codes elsewhere in the project.
3. Build `Navbar.jsx` (minimal, low visual weight, name/wordmark + nav links, consider hamburger-on-desktop gallery-site convention) and `Footer.jsx` (contact CTA, social link placeholders).
4. Set up React Router with routes for: Home (`/`), Work (`/work`), Project Detail (`/work/:projectSlug`), About (`/about`), Contact (`/contact`).
5. Write `DESIGN_SYSTEM.md` documenting: color tokens and usage guidance, font pairing and where each is used, spacing scale, image hover/reveal animation conventions (exact easing/duration), lightbox transition conventions, and general "how minimal is minimal" guidance (e.g., nav opacity, type weight/tracking for UI chrome vs. body copy). This file is the single source of truth every other agent must follow.
6. Confirm your creative decisions in a 4-6 sentence summary.

**Output when done:** Confirm the dev server runs cleanly with placeholder empty pages at each route, and `DESIGN_SYSTEM.md` is complete enough for another agent to build a matching page without further questions.

---

## AGENT 2 — CONTENT & MEDIA DATA (runs after Agent 1, other agents depend on this)

**Scope:** All project/media data and written content. No UI/components.

**Files you own:** `src/data/projectsData.js`, `src/data/aboutData.js`, `public/media/` (sourcing/organizing placeholder images, sample video, sample audio files, or documenting exact placeholder URLs used).

**Task:**
1. `projectsData.js`: array of 4-6 project objects, each `{ slug, title, category, year, description, images: [{src, alt, aspectRatio}], video: {src, poster} | null, audio: {src, title} | null }`. Ensure at least one project has a populated `video` field and at least one has a populated `audio` field. Write genuine, specific 2-4 sentence descriptions per project — no generic filler copy. Source 20+ total images across 4+ categories using placeholder services (Unsplash source URLs or picsum.photos with photography-relevant seeds), with real varied aspect ratios and descriptive alt text for each.
2. Source or clearly document short, freely-licensed/dummy sample video and audio files for the two media-rich projects (can be short public-domain clips or clearly-labeled dummy files) — note the source/license in a comment.
3. `aboutData.js`: bio copy (background, style, fabricated but realistic notable clients/publications), a selected clients/publications list (placeholder names, not real brands), and optional process/philosophy blurb — all written with genuine, specific voice, not corporate-sounding.

**Output when done:** All data/media assets in place and internally consistent (same artist name/style throughout), exported cleanly for import by other agents.

---

## AGENT 3 — HOME PAGE (runs after Agents 1 & 2 complete)

**Scope:** Home page and its distinctive hero/preview treatment.

**Files you own:** `src/pages/Home.jsx`, `src/components/HomeHero.jsx`, `src/components/FeaturedWorkPreview.jsx`.

**Task:**
1. Build a high-impact opening: either a full-bleed hero image/video loop or an immediate curated masonry preview (pick one, per Agent 1's stated direction if noted in `DESIGN_SYSTEM.md`, otherwise make and state the call yourself).
2. Curated selection of 6-8 standout images/projects (pull from `projectsData.js`) with a distinctive hover interaction (subtle zoom, caption reveal, or similar) linking to `/work` or individual `/work/:slug` pages.
3. Brief one-line artist statement/tagline (from `aboutData.js` or written fresh if not covered).
4. Ensure the page doesn't duplicate the global Footer (already built by Agent 1) but can include a contact CTA above it.

**Output when done:** Home page responsive, restrained animation per `DESIGN_SYSTEM.md`, hover interactions feel polished and intentional.

---

## AGENT 4 — WORK/GALLERY + PROJECT DETAIL (runs after Agents 1 & 2 complete, parallel to Agent 3)

**Scope:** The core masonry gallery and project detail experience — the centerpiece of the site.

**Files you own:** `src/pages/Work.jsx`, `src/pages/ProjectDetail.jsx`, `src/components/MasonryGrid.jsx`, `src/components/GalleryItem.jsx`, `src/components/CategoryFilter.jsx`, `src/components/Lightbox.jsx`.

**Task:**
1. **Work/Gallery page:** true masonry grid (varied aspect ratios, genuinely reflowing, not forced squares) rendering all images from `projectsData.js`, responsive column counts (1/2/3-4 across breakpoints). Build `CategoryFilter.jsx` as a clean tab/filter control that animates items in/out smoothly on filter change.
2. **Lightbox:** click any grid item to open a full lightbox with next/prev navigation, captions, keyboard support (arrows, Escape), and a smooth open/close transition.
3. **Project Detail page** (`/work/:projectSlug`): large hero image or embedded video for the project, title/category/year/description, full image set in a deliberate single/two-column large-image layout, and "Next Project"/"Previous Project" navigation at the bottom. Include lightbox behavior here too for full-size viewing.
4. Implement lazy loading and, if reasonable, skeleton/blur-up placeholders while images load.

**Output when done:** Masonry grid genuinely reflows at all breakpoints, filtering is smooth, lightbox is fully keyboard accessible, project detail pages render correctly for every project including the video- and audio-bearing ones (note: actual video/audio player components are built by Agent 5 — import and use them here once available, or build a minimal placeholder and note it if sequencing requires).

---

## AGENT 5 — MEDIA PLAYERS + ABOUT + CONTACT (runs after Agents 1 & 2 complete, parallel to Agents 3 & 4)

**Scope:** Custom media player components plus the About and Contact pages.

**Files you own:** `src/components/VideoPlayer.jsx`, `src/components/AudioPlayer.jsx`, `src/pages/About.jsx`, `src/pages/Contact.jsx`, `src/components/ContactForm.jsx`.

**Task:**
1. **VideoPlayer.jsx:** custom-styled HTML5 video wrapper with poster image, lazy loading (no unwanted autoplay), responsive aspect-ratio container (no layout shift), and basic custom controls if going beyond native controls (play/pause at minimum styled to match the site).
2. **AudioPlayer.jsx:** fully custom audio player UI — play/pause button, scrub/progress bar, current time/duration display, optional static styled waveform visual — no default browser audio element exposed.
3. Export both cleanly so Agent 4 (or the QA agent) can drop them into `ProjectDetail.jsx` for the video- and audio-bearing projects.
4. **About page:** portrait/headshot placeholder, bio copy from `aboutData.js`, selected clients/publications list, optional process/philosophy section, dummy resume/CV download button (clearly commented as non-functional placeholder).
5. **Contact page:** `ContactForm.jsx` with Name, Email, Subject/Project Type dropdown, Message fields, validation, loading state, success confirmation, and a commented placeholder `submitContactForm()` function. Include direct contact info and social/portfolio placeholder links. Add a tasteful background/typographic treatment rather than a bare form.

**Output when done:** Both media players fully functional and keyboard accessible with proper aria-labels; About and Contact pages responsive and matching `DESIGN_SYSTEM.md`.

---

## AGENT 6 — QA & INTEGRATION (runs last, after all others complete)

**Scope:** Whole repo — assemble, verify, fix only integration issues, do not redesign.

**Task:**
1. Wire `VideoPlayer.jsx` and `AudioPlayer.jsx` (from Agent 5) into the appropriate projects within `ProjectDetail.jsx` (from Agent 4) if not already connected.
2. Run `npm run build` and fix any build errors or console warnings.
3. Verify every route renders and all navigation (nav links, filter tabs, lightbox, next/prev project) works correctly.
4. Check responsiveness at 375px, 768px, 1024px, 1440px for every page, with particular attention to the masonry grid's column reflow — fix any breakpoints that were missed.
5. Verify accessibility: semantic tags, real descriptive alt text throughout, labeled forms, keyboard support across lightbox/filters/media players, visible focus states, contrast check against `DESIGN_SYSTEM.md` colors (especially text over images).
6. Verify design consistency across pages/components built by different agents — spacing, type treatment, hover/animation timing should feel uniform and restrained throughout. Fix any visible drift by aligning to `DESIGN_SYSTEM.md`.
7. Write the final `README.md`: how to run locally, how to add a new project/gallery entry, how to swap placeholder media for real client files, and how to adjust the color/type theme.
8. Go through this checklist and confirm each item explicitly in your final summary:
   - [ ] Home, Work/Gallery, Project Detail, About, and Contact pages all implemented and linked
   - [ ] True masonry/reflowing grid, responsive, with working category filtering
   - [ ] Lightbox with next/prev nav, captions, keyboard support
   - [ ] At least one project has embedded video with custom controls
   - [ ] At least one project has a fully custom audio player
   - [ ] 20+ images across 4+ categories, varied aspect ratios, real alt text
   - [ ] Contact form fully validated with loading/success states
   - [ ] Project/media data externalized into a data file
   - [ ] Fully responsive at all breakpoints
   - [ ] Accessible throughout, no console errors, successful production build
   - [ ] README written
   - [ ] Visual design feels like a genuine working artist's site, consistent across all pages

---

## EXECUTION ORDER SUMMARY (tell the IDE this explicitly)

1. Agent 1 (Foundation) — solo, must finish first.
2. Agent 2 (Content/Media Data) — runs immediately after Agent 1, solo (Agents 3-5 all depend on its data).
3. Agents 3, 4, and 5 — run in parallel once Agents 1 & 2 are done (Agent 4 may build a temporary placeholder for the media players if it finishes before Agent 5 — final wiring happens in QA).
4. Agent 6 (QA/Integration) — last, only after every other agent has finished; responsible for final wiring of media players into project detail pages.
