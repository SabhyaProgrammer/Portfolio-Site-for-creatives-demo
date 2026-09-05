import { useState } from 'react';
import { Link, useParams, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { getProjectBySlug, getAdjacentProjects } from '../data/projectsData';
import Lightbox from '../components/Lightbox';
import VideoPlayer from '../components/VideoPlayer';
import AudioPlayer from '../components/AudioPlayer';

export default function ProjectDetail() {
  const { projectSlug } = useParams();
  const project = getProjectBySlug(projectSlug);
  const { prev, next } = getAdjacentProjects(projectSlug);
  const [lightboxIndex, setLightboxIndex] = useState(null);

  if (!project) {
    return <Navigate to="/work" replace />;
  }

  const lightboxItems = project.images.map((img, i) => ({
    ...img,
    id: `${project.slug}-${i}`,
  }));

  return (
    <article className="pt-24 md:pt-28">
      {/* Hero */}
      <section className="section-padding pb-10 md:pb-14">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: [0, 0, 0.2, 1] }}
          className="mx-auto max-w-7xl"
        >
          <Link
            to="/work"
            className="mb-6 inline-flex text-sm uppercase tracking-widest text-mist transition-colors duration-reveal hover:text-ink focus-ring"
          >
            ← All work
          </Link>

          <div className="flex flex-wrap items-baseline gap-3">
            <span className="text-xs uppercase tracking-widest text-accent">{project.category}</span>
            <span className="text-xs text-mist">{project.year}</span>
          </div>

          <h1 className="page-heading mt-2">{project.title}</h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-mist md:text-lg">
            {project.description}
          </p>
        </motion.div>
      </section>

      {/* Hero media: video or image */}
      <section className="section-padding pb-12 md:pb-16">
        <div className="mx-auto max-w-7xl">
          {project.video ? (
            <VideoPlayer
              src={project.video.src}
              poster={project.video.poster}
              alt={project.video.alt}
            />
          ) : (
            <div className="overflow-hidden">
              <img
                src={project.heroImage.src}
                alt={project.heroImage.alt}
                className="w-full object-cover"
                style={{ maxHeight: '70vh' }}
              />
            </div>
          )}
        </div>
      </section>

      {/* Audio section if present */}
      {project.audio && (
        <section className="section-padding pb-12 md:pb-16">
          <div className="mx-auto max-w-2xl">
            <AudioPlayer src={project.audio.src} title={project.audio.title} />
          </div>
        </section>
      )}

      {/* Image gallery */}
      <section className="section-padding pb-16 md:pb-24" aria-label="Project images">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 md:grid-cols-2 md:gap-8 lg:gap-10">
            {project.images.map((image, index) => (
              <motion.figure
                key={`${project.slug}-img-${index}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.4, ease: [0, 0, 0.2, 1] }}
                className={index === 0 ? 'md:col-span-2' : ''}
              >
                <button
                  type="button"
                  onClick={() => setLightboxIndex(index)}
                  className="group w-full overflow-hidden focus-ring"
                  aria-label={`View full size: ${image.alt}`}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    loading="lazy"
                    className="w-full object-cover transition-transform duration-reveal ease-reveal group-hover:scale-[1.03]"
                  />
                </button>
                {image.caption && (
                  <figcaption className="mt-3 text-sm text-mist">{image.caption}</figcaption>
                )}
              </motion.figure>
            ))}
          </div>
        </div>
      </section>

      {/* Prev / Next navigation */}
      <nav
        className="border-t border-ink/10 section-padding py-12 md:py-16"
        aria-label="Project navigation"
      >
        <div className="mx-auto flex max-w-7xl justify-between gap-8">
          {prev ? (
            <Link
              to={`/work/${prev.slug}`}
              className="group max-w-xs focus-ring"
            >
              <span className="text-xs uppercase tracking-widest text-mist">Previous</span>
              <p className="mt-1 font-serif text-xl text-ink transition-colors duration-reveal group-hover:text-accent">
                ← {prev.title}
              </p>
            </Link>
          ) : (
            <span />
          )}
          {next ? (
            <Link
              to={`/work/${next.slug}`}
              className="group max-w-xs text-right focus-ring"
            >
              <span className="text-xs uppercase tracking-widest text-mist">Next</span>
              <p className="mt-1 font-serif text-xl text-ink transition-colors duration-reveal group-hover:text-accent">
                {next.title} →
              </p>
            </Link>
          ) : (
            <span />
          )}
        </div>
      </nav>

      {lightboxIndex !== null && (
        <Lightbox
          items={lightboxItems}
          currentIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onNavigate={setLightboxIndex}
        />
      )}
    </article>
  );
}
