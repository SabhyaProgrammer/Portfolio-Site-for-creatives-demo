import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <section className="section-padding flex min-h-[70vh] items-center pt-24 md:pt-28">
      <div className="mx-auto w-full max-w-7xl">
        <p className="text-xs uppercase tracking-widest text-accent">404</p>
        <h1 className="page-heading mt-3">Page not found</h1>
        <p className="mt-4 max-w-xl text-mist">
          The page you are looking for does not exist or may have moved.
        </p>
        <Link
          to="/work"
          className="mt-8 inline-flex items-center gap-2 text-sm uppercase tracking-widest text-accent transition-colors duration-reveal hover:text-ink focus-ring"
        >
          Browse work <span aria-hidden="true">→</span>
        </Link>
      </div>
    </section>
  );
}
