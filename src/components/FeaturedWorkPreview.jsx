import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { getFeaturedImages } from '../data/projectsData';

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0, 0, 0.2, 1] },
  },
};

export default function FeaturedWorkPreview() {
  const featured = getFeaturedImages();

  return (
    <section className="section-padding py-16 md:py-24 lg:py-32" aria-labelledby="featured-heading">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.4, ease: [0, 0, 0.2, 1] }}
          className="mb-10 flex items-end justify-between md:mb-14"
        >
          <h2 id="featured-heading" className="page-heading">
            Selected Work
          </h2>
          <Link
            to="/work"
            className="hidden text-sm uppercase tracking-widest text-accent transition-colors duration-reveal hover:text-ink focus-ring sm:inline-flex"
          >
            View all →
          </Link>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-4 lg:gap-5"
        >
          {featured.map(({ project, image }) => (
            <motion.div key={`${project.slug}-${image.src}`} variants={itemVariants}>
              <Link
                to={`/work/${project.slug}`}
                className="group relative block overflow-hidden focus-ring"
              >
                <div
                  className="relative overflow-hidden bg-mist/20"
                  style={{ aspectRatio: image.aspectRatio || 1 }}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-reveal ease-reveal group-hover:scale-[1.03]"
                  />
                  <div
                    className="absolute inset-0 flex items-end bg-gradient-to-t from-ink/70 via-ink/20 to-transparent p-4 opacity-0 transition-opacity duration-reveal group-hover:opacity-100 group-focus-visible:opacity-100"
                  >
                    <div>
                      <p className="text-xs uppercase tracking-widest text-paper/70">
                        {project.category}
                      </p>
                      <p className="font-serif text-lg text-paper">{project.title}</p>
                      {image.caption && (
                        <p className="mt-1 text-sm text-paper/80">{image.caption}</p>
                      )}
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-10 text-center sm:hidden">
          <Link
            to="/work"
            className="text-sm uppercase tracking-widest text-accent transition-colors duration-reveal hover:text-ink focus-ring"
          >
            View all work →
          </Link>
        </div>
      </div>
    </section>
  );
}
