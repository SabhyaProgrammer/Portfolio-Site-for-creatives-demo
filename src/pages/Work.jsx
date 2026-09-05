import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { categories, getAllGalleryItems } from '../data/projectsData';
import CategoryFilter from '../components/CategoryFilter';
import MasonryGrid from '../components/MasonryGrid';
import Lightbox from '../components/Lightbox';

export default function Work() {
  const allItems = useMemo(() => getAllGalleryItems(), []);
  const [activeCategory, setActiveCategory] = useState('All');
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const filteredItems = useMemo(() => {
    if (activeCategory === 'All') return allItems;
    return allItems.filter((item) => item.category === activeCategory);
  }, [allItems, activeCategory]);

  const openLightbox = (item) => {
    const index = filteredItems.findIndex((i) => i.id === item.id);
    setLightboxIndex(index);
  };

  const closeLightbox = () => setLightboxIndex(null);

  const navigateLightbox = (index) => setLightboxIndex(index);

  return (
    <div className="pt-24 md:pt-28">
      <section className="section-padding pb-10 md:pb-14">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: [0, 0, 0.2, 1] }}
          className="mx-auto max-w-7xl"
        >
          <h1 className="page-heading">Work</h1>
          <p className="mt-4 max-w-xl text-mist">
            Selected projects across portraiture, editorial, travel, and personal series.
          </p>
          <div className="mt-8">
            <CategoryFilter
              categories={categories}
              activeCategory={activeCategory}
              onCategoryChange={setActiveCategory}
            />
          </div>
        </motion.div>
      </section>

      <section className="section-padding pb-16 md:pb-24">
        <div className="mx-auto max-w-7xl">
          <MasonryGrid items={filteredItems} onOpenItem={openLightbox} />
        </div>
      </section>

      {lightboxIndex !== null && (
        <Lightbox
          items={filteredItems}
          currentIndex={lightboxIndex}
          onClose={closeLightbox}
          onNavigate={navigateLightbox}
        />
      )}
    </div>
  );
}
