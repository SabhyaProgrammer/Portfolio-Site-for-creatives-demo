import { useState } from 'react';
import { motion } from 'framer-motion';

export default function GalleryItem({ item, onOpen }) {
  const [loaded, setLoaded] = useState(false);

  return (
    <motion.article
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.4, ease: [0, 0, 0.2, 1] }}
      className="masonry-item"
    >
      <button
        type="button"
        onClick={() => onOpen(item)}
        className="group relative w-full overflow-hidden bg-mist/20 text-left focus-ring"
        aria-label={`Open ${item.projectTitle}: ${item.alt}`}
      >
        <div
          className={`absolute inset-0 bg-mist/30 transition-opacity duration-500 ${
            loaded ? 'opacity-0' : 'opacity-100'
          }`}
          aria-hidden="true"
        />
        <img
          src={item.src}
          alt={item.alt}
          loading="lazy"
          onLoad={() => setLoaded(true)}
          className="w-full object-cover transition-transform duration-reveal ease-reveal group-hover:scale-[1.03]"
          style={{ aspectRatio: item.aspectRatio || 1 }}
        />
        <div className="absolute inset-x-0 bottom-0 translate-y-full bg-gradient-to-t from-ink/80 to-transparent p-4 transition-transform duration-reveal group-hover:translate-y-0 group-focus-visible:translate-y-0">
          <p className="text-xs uppercase tracking-widest text-paper/70">{item.category}</p>
          <p className="font-serif text-base text-paper">{item.projectTitle}</p>
        </div>
      </button>
    </motion.article>
  );
}
