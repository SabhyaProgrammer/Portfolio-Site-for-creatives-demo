import { AnimatePresence } from 'framer-motion';
import GalleryItem from './GalleryItem';

export default function MasonryGrid({ items, onOpenItem }) {
  return (
    <div className="masonry-columns">
      <AnimatePresence mode="popLayout">
        {items.map((item) => (
          <GalleryItem key={item.id} item={item} onOpen={onOpenItem} />
        ))}
      </AnimatePresence>
    </div>
  );
}
