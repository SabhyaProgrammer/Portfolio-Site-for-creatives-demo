import { Link } from 'react-router-dom';
import { aboutData } from '../data/aboutData';

export default function Footer() {
  const { contact, social } = aboutData;

  return (
    <footer className="border-t border-ink/10 bg-paper/80 backdrop-blur-md section-padding py-12 md:py-16">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="font-serif text-2xl text-ink md:text-3xl">Mara Voss</p>
          <p className="mt-2 max-w-sm text-sm text-mist">{aboutData.tagline}</p>
        </div>

        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:gap-12">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 text-sm font-medium uppercase tracking-widest text-accent transition-colors duration-reveal hover:text-ink focus-ring"
          >
            Get in touch
            <span aria-hidden="true">→</span>
          </Link>

          <ul className="flex gap-6" role="list" aria-label="Social links">
            {social.map(({ label, href }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm uppercase tracking-widest text-mist transition-colors duration-reveal hover:text-ink focus-ring"
                  aria-label={`${label} (opens in new tab)`}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-7xl border-t border-ink/5 pt-6">
        <p className="text-xs text-mist">
          © {new Date().getFullYear()} Mara Voss · {contact.location}
        </p>
      </div>
    </footer>
  );
}
