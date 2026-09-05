export default function CategoryFilter({ categories, activeCategory, onCategoryChange }) {
  return (
    <div
      className="flex flex-wrap gap-2 md:gap-3"
      role="tablist"
      aria-label="Filter gallery by category"
    >
      {categories.map((category) => {
        const isActive = category === activeCategory;
        return (
          <button
            key={category}
            type="button"
            role="tab"
            aria-selected={isActive}
            onClick={() => onCategoryChange(category)}
            className={`px-4 py-2 text-sm uppercase tracking-widest transition-colors duration-reveal focus-ring ${
              isActive
                ? 'bg-ink text-paper'
                : 'bg-transparent text-mist hover:text-ink'
            }`}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
}
