import { useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Lightbox({ items, currentIndex, onClose, onNavigate }) {
  const closeButtonRef = useRef(null);
  const currentItem = items[currentIndex];

  const handlePrev = useCallback(() => {
    if (currentIndex > 0) onNavigate(currentIndex - 1);
  }, [currentIndex, onNavigate]);

  const handleNext = useCallback(() => {
    if (currentIndex < items.length - 1) onNavigate(currentIndex + 1);
  }, [currentIndex, items.length, onNavigate]);

  useEffect(() => {
    closeButtonRef.current?.focus();
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose, handlePrev, handleNext]);

  if (!currentItem) return null;

  return (
    <AnimatePresence>
      <motion.div
        role="dialog"
        aria-modal="true"
        aria-label="Image lightbox"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.4, ease: [0, 0, 0.2, 1] }}
        className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/95 p-4 md:p-8"
        onClick={onClose}
      >
        <button
          ref={closeButtonRef}
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center text-paper transition-colors duration-reveal hover:text-accent focus-ring md:right-8 md:top-8"
          aria-label="Close lightbox"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="1.5" />
          </svg>
        </button>

        {currentIndex > 0 && (
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              handlePrev();
            }}
            className="absolute left-2 top-1/2 z-10 -translate-y-1/2 p-3 text-paper transition-colors duration-reveal hover:text-accent focus-ring md:left-6"
            aria-label="Previous image"
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M15 6l-6 6 6 6" stroke="currentColor" strokeWidth="1.5" />
            </svg>
          </button>
        )}

        {currentIndex < items.length - 1 && (
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              handleNext();
            }}
            className="absolute right-2 top-1/2 z-10 -translate-y-1/2 p-3 text-paper transition-colors duration-reveal hover:text-accent focus-ring md:right-6"
            aria-label="Next image"
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="1.5" />
            </svg>
          </button>
        )}

        <motion.figure
          key={currentItem.id ?? currentItem.src}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.4, ease: [0, 0, 0.2, 1] }}
          className="flex max-h-[85vh] max-w-5xl flex-col"
          onClick={(e) => e.stopPropagation()}
        >
          <img
            src={currentItem.src}
            alt={currentItem.alt}
            className="max-h-[75vh] w-auto max-w-full object-contain"
          />
          <figcaption className="mt-4 text-center">
            {currentItem.caption && (
              <p className="text-sm text-paper/80">{currentItem.caption}</p>
            )}
            <p className="mt-1 text-xs uppercase tracking-widest text-paper/60">
              {currentIndex + 1} / {items.length}
            </p>
          </figcaption>
        </motion.figure>
      </motion.div>
    </AnimatePresence>
  );
}
