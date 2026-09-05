import { motion } from 'framer-motion';
import { aboutData } from '../data/aboutData';

export default function About() {
  const { portrait, bio, clients, publications, process, resumeUrl } = aboutData;

  return (
    <div className="pt-24 md:pt-28">
      <section className="section-padding pb-16 md:pb-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: [0, 0, 0.2, 1] }}
          >
            <h1 className="page-heading">About</h1>
            <div className="mt-8 space-y-4 text-base leading-relaxed text-mist md:text-lg">
              {bio.split('\n\n').map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>

            {/* Placeholder resume download — non-functional */}
            <a
              href={resumeUrl}
              onClick={(e) => e.preventDefault()}
              className="mt-8 inline-flex items-center gap-2 border border-ink/20 px-6 py-3 text-sm uppercase tracking-widest text-ink transition-colors duration-reveal hover:border-accent hover:text-accent focus-ring"
              aria-label="Download resume (placeholder link)"
              title="Placeholder — connect to real PDF in production"
            >
              Download CV
              <span aria-hidden="true">↓</span>
            </a>
          </motion.div>

          <motion.figure
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: [0, 0, 0.2, 1], delay: 0.1 }}
            className="overflow-hidden"
          >
            <img
              src={portrait.src}
              alt={portrait.alt}
              loading="lazy"
              className="aspect-[3/4] w-full object-cover"
            />
          </motion.figure>
        </div>
      </section>

      <section className="border-t border-ink/10 section-padding py-16 md:py-24">
        <div className="mx-auto max-w-7xl">
          <h2 className="font-serif text-3xl text-ink md:text-4xl">Selected Clients</h2>
          <ul className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4" role="list">
            {clients.map((client) => (
              <li
                key={client}
                className="border border-ink/10 px-4 py-6 text-center text-sm uppercase tracking-widest text-mist"
              >
                {client}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-t border-ink/10 section-padding py-16 md:py-24">
        <div className="mx-auto max-w-7xl">
          <h2 className="font-serif text-3xl text-ink md:text-4xl">Publications</h2>
          <ul className="mt-8 space-y-4" role="list">
            {publications.map((pub) => (
              <li key={pub} className="border-b border-ink/10 pb-4 text-mist">
                {pub}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-t border-ink/10 section-padding py-16 md:py-24">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-serif text-3xl text-ink md:text-4xl">{process.title}</h2>
          <div className="mt-6 space-y-4 text-base leading-relaxed text-mist md:text-lg">
            {process.body.split('\n\n').map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
