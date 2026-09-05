import HomeHero from '../components/HomeHero';
import FeaturedWorkPreview from '../components/FeaturedWorkPreview';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <>
      <HomeHero />
      <FeaturedWorkPreview />

      <section className="section-padding border-t border-ink/10 py-16 md:py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease: [0, 0, 0.2, 1] }}
          className="mx-auto max-w-7xl text-center"
        >
          <p className="font-serif text-2xl text-ink md:text-3xl">
            Available for editorial, portrait, and fine-art commissions.
          </p>
          <Link
            to="/contact"
            className="mt-6 inline-flex items-center gap-2 text-sm uppercase tracking-widest text-accent transition-colors duration-reveal hover:text-ink focus-ring"
          >
            Start a conversation
            <span aria-hidden="true">→</span>
          </Link>
        </motion.div>
      </section>
    </>
  );
}
