import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { aboutData } from '../data/aboutData';

const heroImage = {
  src: 'https://images.unsplash.com/photo-1493863641943-9b67192f0b0c?w=1920&q=85',
  alt: 'Fine-art photograph of a solitary figure in misty landscape at dawn',
};

export default function HomeHero() {
  const [loaded, setLoaded] = useState(false);

  return (
    <section className="relative h-[100svh] min-h-[500px] w-full overflow-hidden">
      <div
        className={`absolute inset-0 bg-mist/30 transition-opacity duration-700 ${
          loaded ? 'opacity-0' : 'opacity-100'
        }`}
        aria-hidden="true"
      />
      <img
        src={heroImage.src}
        alt={heroImage.alt}
        className="h-full w-full object-cover"
        onLoad={() => setLoaded(true)}
        fetchpriority="high"
      />
      <div
        className="absolute inset-0 bg-gradient-to-t from-ink/60 via-ink/20 to-transparent"
        aria-hidden="true"
      />

      <div className="absolute inset-0 flex flex-col justify-end section-padding pb-16 md:pb-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          className="max-w-2xl"
        >
          <h1 className="font-serif text-5xl font-medium leading-tight text-white sm:text-6xl md:text-7xl lg:text-8xl">
            Mara Voss
          </h1>
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-white/90 sm:text-xl">
            {aboutData.heroStatement}
          </p>
          <Link
            to="/work"
            className="mt-10 btn-primary !text-white hover:!text-ink"
          >
            View work
            <span aria-hidden="true">→</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
