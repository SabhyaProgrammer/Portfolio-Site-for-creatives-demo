import { useState, forwardRef } from 'react';
import { motion } from 'framer-motion';

const transition = { duration: 0.6, ease: [0.22, 1, 0.36, 1] };

export default forwardRef(function GalleryItem({ item, onOpen }, ref) {
  const [loaded, setLoaded] = useState(false);

  return (
    <motion.article
      ref={ref}
      layout
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      exit={{ opacity: 0 }}
      transition={transition}
      className="masonry-item"
    >
      <button
        type="button"
        onClick={() => onOpen(item)}
        className="group relative w-full overflow-hidden bg-stone-100 text-left focus-ring"
        aria-label={`Open ${item.projectTitle}: ${item.alt}`}
      >
        <div
          className={`absolute inset-0 bg-stone-200 transition-opacity duration-700 ${
            loaded ? 'opacity-0' : 'opacity-100'
          }`}
          aria-hidden="true"
        />
        <img
          src={item.src}
          alt={item.alt}
          loading="lazy"
          onLoad={() => setLoaded(true)}
          className="w-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
          style={{ aspectRatio: item.aspectRatio || 1 }}
        />
        <div className="absolute inset-0 flex flex-col justify-end bg-black/0 p-6 transition-colors duration-500 group-hover:bg-black/20 group-focus-visible:bg-black/20">
          <div className="translate-y-4 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100">
            <p className="text-xs font-medium uppercase tracking-widest text-white/90">{item.category}</p>
            <p className="mt-1 font-serif text-lg text-white">{item.projectTitle}</p>
          </div>
        </div>
      </button>
    </motion.article>
  );
});
