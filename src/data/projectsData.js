/**
 * Portfolio project data for Mara Voss.
 *
 * To add a new project:
 * 1. Copy an existing object and assign a unique `slug`.
 * 2. Add images with `src`, `alt`, and `aspectRatio` (width/height as decimal).
 * 3. Optionally add `video` or `audio` objects.
 * 4. Place local media in `public/media/` and reference with `/media/filename`.
 */

export const categories = [
  'All',
  'Portraits',
  'Editorial',
  'Travel',
  'Personal Work',
];

export const projects = [
  {
    slug: 'urban-portraits',
    title: 'Urban Portraits',
    category: 'Portraits',
    year: 2024,
    description:
      'A series of street-adjacent portraits made during early-morning walks through Portland\'s industrial districts. Each subject was photographed within a single city block — no studio, no crew, just available light bouncing off corrugated steel and wet pavement.',
    heroImage: {
      src: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=1600&q=80',
      alt: 'Close portrait of a woman with freckles in soft overcast light',
    },
    images: [
      {
        src: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&q=80',
        alt: 'Close portrait of a woman with freckles in soft overcast light',
        aspectRatio: 0.75,
        caption: 'Morning, Pearl District',
      },
      {
        src: 'https://images.unsplash.com/photo-1521119989659-a83eee488004?w=800&q=80',
        alt: 'Portrait of a woman with soft lighting',
        aspectRatio: 0.8,
        caption: 'Industrial Ave.',
      },
      {
        src: 'https://images.unsplash.com/photo-1502823403499-6ccfcf4fd453?w=800&q=80',
        alt: 'Portrait of a woman with curly hair',
        aspectRatio: 0.67,
        caption: 'Freeway underpass',
      },
      {
        src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80',
        alt: 'Portrait of a man',
        aspectRatio: 1.2,
        caption: 'Converted to mono in post',
      },
      {
        src: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=800&q=80',
        alt: 'Portrait of a woman laughing',
        aspectRatio: 0.75,
        caption: 'Last light, Division St.',
      },
    ],
    video: null,
    audio: null,
  },
  {
    slug: 'meridian-editorial',
    title: 'Meridian — Autumn Issue',
    category: 'Editorial',
    year: 2024,
    description:
      'Commissioned by Meridian Journal for their autumn fashion editorial. Shot across three locations in a single day: a decommissioned ferry, a linen-draped loft, and the mossy edge of Forest Park. Styling by Amara Keene; creative direction by the Meridian team.',
    heroImage: {
      src: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=1600&q=80',
      alt: 'Editorial fashion photograph of a model in earth-toned clothing on a ferry deck',
    },
    images: [
      {
        src: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&q=80',
        alt: 'Fashion editorial on ferry deck with model in rust-colored coat',
        aspectRatio: 0.67,
        caption: 'Ferry deck, frame 12',
      },
      {
        src: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=800&q=80',
        alt: 'Editorial portrait of model in minimalist white studio setting',
        aspectRatio: 0.75,
        caption: 'Loft interior',
      },
      {
        src: 'https://images.unsplash.com/photo-1483985988350-763728e3682b?w=800&q=80',
        alt: 'Street-style editorial photograph with model walking past storefront',
        aspectRatio: 1.5,
        caption: 'Wide — storefront sequence',
      },
      {
        src: 'https://images.unsplash.com/photo-1496747611176-843222e1ee53?w=800&q=80',
        alt: 'Editorial detail shot of hands holding fabric against natural light',
        aspectRatio: 1.0,
        caption: 'Detail study',
      },
      {
        src: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=800&q=80',
        alt: 'Full-length editorial fashion shot in forest setting',
        aspectRatio: 0.6,
        caption: 'Forest Park edge',
      },
    ],
    video: null,
    audio: null,
  },
  {
    slug: 'nordic-light',
    title: 'Nordic Light',
    category: 'Travel',
    year: 2023,
    description:
      'Two weeks along the Lofoten archipelago during the blue hour season. No itinerary beyond following the last visible light across fishing villages and empty beaches. This series documents what happens when you stop chasing the dramatic peak and start photographing the long fade.',
    heroImage: {
      src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1600&q=80',
      alt: 'Snow-capped mountain peaks reflected in calm fjord water at blue hour',
    },
    images: [
      {
        src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80',
        alt: 'Mountain peaks and fjord at blue hour in Norway',
        aspectRatio: 1.5,
        caption: 'Reinefjorden, 3:47 PM',
      },
      {
        src: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80',
        alt: 'Dramatic mountain ridge above clouds',
        aspectRatio: 0.67,
        caption: 'Vertical study',
      },
      {
        src: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800&q=80',
        alt: 'Misty forest valley with fog rolling through pine trees',
        aspectRatio: 1.4,
        caption: 'Morning fog, Hamnøy',
      },
      {
        src: 'https://images.unsplash.com/photo-1439066615861-d1af74cecbf4?w=800&q=80',
        alt: 'Calm lake reflecting mountains and cloudy sky',
        aspectRatio: 1.6,
        caption: 'Still water',
      },
      {
        src: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800&q=80',
        alt: 'Starry night sky over snowy mountain landscape',
        aspectRatio: 0.75,
        caption: 'First clear night',
      },
    ],
    video: null,
    audio: null,
  },
  {
    slug: 'domestic-stillness',
    title: 'Domestic Stillness',
    category: 'Personal Work',
    year: 2024,
    description:
      'An ongoing personal series shot entirely within my apartment during the winter lock-in months. Window light, houseplants, half-finished coffee, and the particular quality of silence that arrives when the city slows down. No people — just evidence of living.',
    heroImage: {
      src: 'https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?w=1600&q=80',
      alt: 'Minimal still life of a ceramic cup on a wooden table in soft window light',
    },
    images: [
      {
        src: 'https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?w=800&q=80',
        alt: 'Ceramic cup on wooden table in morning window light',
        aspectRatio: 1.0,
        caption: 'Tuesday, 8 AM',
      },
      {
        src: 'https://images.unsplash.com/photo-1513519245088-0e12902e35ca?w=800&q=80',
        alt: 'Houseplant leaves backlit by window creating shadow patterns',
        aspectRatio: 0.8,
        caption: 'Monstera study',
      },
      {
        src: 'https://images.unsplash.com/photo-1615529328331-f8917597711f?w=800&q=80',
        alt: 'Minimal interior corner with chair and soft natural light',
        aspectRatio: 1.3,
        caption: 'Corner chair',
      },
      {
        src: 'https://images.unsplash.com/photo-1616046229399-9ae0951f8519?w=800&q=80',
        alt: 'Stacked books and reading glasses on bedside table',
        aspectRatio: 0.9,
        caption: 'Nightstand',
      },
    ],
    video: null,
    audio: {
      // Public domain sample: SoundHelix (used for demo purposes)
      src: '/media/sample-audio.mp3',
      title: 'Ambient Notes — Studio Walkthrough',
    },
  },
  {
    slug: 'behind-the-lens',
    title: 'Behind the Lens',
    category: 'Editorial',
    year: 2024,
    description:
      'A short behind-the-scenes reel from the Meridian autumn shoot — handheld footage of location scouting, light metering, and the quiet moments between frames. Edited to show process without breaking the editorial mood of the final images.',
    heroImage: {
      src: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=1600&q=80',
      alt: 'Photographer holding a camera in a field at golden hour',
    },
    images: [
      {
        src: 'https://images.unsplash.com/photo-1452587925148-ce544e77e70d?w=800&q=80',
        alt: 'Camera and lens arranged on a wooden desk with notebook',
        aspectRatio: 1.4,
        caption: 'Kit flat lay',
      },
      {
        src: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=800&q=80',
        alt: 'Photographer with camera in outdoor golden light',
        aspectRatio: 0.75,
        caption: 'On location',
      },
      {
        src: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=800&q=80',
        alt: 'Close-up of camera viewfinder showing landscape composition',
        aspectRatio: 1.2,
        caption: 'Through the finder',
      },
      {
        src: 'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=800&q=80',
        alt: 'Photography studio setup with lighting equipment and backdrop',
        aspectRatio: 1.5,
        caption: 'Prep day',
      },
    ],
    video: {
      // Sample video: Google sample bucket (free for testing)
      src: '/media/sample-video.mp4',
      poster: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=1200&q=80',
      alt: 'Behind-the-scenes video of a photography shoot in natural light',
    },
    audio: null,
  },
  {
    slug: 'coastal-forms',
    title: 'Coastal Forms',
    category: 'Travel',
    year: 2023,
    description:
      'Abstracted landscapes from the Oregon coast — not the iconic sea stacks, but the tide pools, driftwood geometry, and salt-bleached cliffs that most drive past. Shot on medium format during a solo camping trip from Astoria to Brookings.',
    heroImage: {
      src: 'https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=1600&q=80',
      alt: 'Ocean waves crashing against rocky coastline at sunset',
    },
    images: [
      {
        src: 'https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=800&q=80',
        alt: 'Ocean waves against rocky Oregon coastline at sunset',
        aspectRatio: 1.5,
        caption: 'Cannon Beach, south end',
      },
      {
        src: 'https://images.unsplash.com/photo-1439402677875-470d99f76936?w=800&q=80',
        alt: 'Tide pool with reflected sky and sea anemones',
        aspectRatio: 1.0,
        caption: 'Tide pool, low tide',
      },
      {
        src: 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=800&q=80',
        alt: 'Driftwood formations on sandy beach under overcast sky',
        aspectRatio: 0.7,
        caption: 'Driftwood geometry',
      },
      {
        src: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&q=80',
        alt: 'Aerial view of turquoise ocean water meeting sandy shore',
        aspectRatio: 1.6,
        caption: 'From the bluff',
      },
    ],
    video: null,
    audio: null,
  },
];

/** Flatten all gallery images for the Work page masonry grid */
export function getAllGalleryItems() {
  return projects.flatMap((project) =>
    project.images.map((image, index) => ({
      ...image,
      id: `${project.slug}-${index}`,
      projectSlug: project.slug,
      projectTitle: project.title,
      category: project.category,
    }))
  );
}

/** Get featured images for home page preview (6-8 standout images) */
export function getFeaturedImages() {
  const featured = [
    { project: projects[0], image: projects[0].images[0] },
    { project: projects[1], image: projects[1].images[0] },
    { project: projects[2], image: projects[2].images[0] },
    { project: projects[3], image: projects[3].images[1] },
    { project: projects[4], image: projects[4].images[1] },
    { project: projects[5], image: projects[5].images[0] },
    { project: projects[0], image: projects[0].images[2] },
    { project: projects[1], image: projects[1].images[2] },
  ];
  return featured;
}

export function getProjectBySlug(slug) {
  return projects.find((p) => p.slug === slug) ?? null;
}

export function getAdjacentProjects(slug) {
  const index = projects.findIndex((p) => p.slug === slug);
  if (index === -1) return { prev: null, next: null };
  return {
    prev: index > 0 ? projects[index - 1] : null,
    next: index < projects.length - 1 ? projects[index + 1] : null,
  };
}
