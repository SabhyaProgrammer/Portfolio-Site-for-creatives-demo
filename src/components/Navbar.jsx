import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { to: '/work', label: 'Work' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-paper/80 backdrop-blur-md">
      <nav
        className="section-padding flex items-center justify-between py-5 md:py-6"
        aria-label="Main navigation"
      >
        <Link
          to="/"
          className="font-serif text-xl tracking-wide text-ink focus-ring md:text-2xl"
        >
          Mara Voss
        </Link>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-8 md:flex" role="list">
          {navLinks.map(({ to, label }) => (
            <li key={to}>
              <NavLink
                to={to}
                className={({ isActive }) =>
                  `nav-link btn-hover ${isActive ? 'text-accent' : ''}`
                }
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Mobile hamburger */}
        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center md:hidden focus-ring"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          <span className="sr-only">{menuOpen ? 'Close' : 'Menu'}</span>
          <div className="flex w-5 flex-col gap-1.5">
            <span
              className={`block h-px w-full bg-ink transition-transform duration-reveal ease-reveal ${
                menuOpen ? 'translate-y-[7px] rotate-45' : ''
              }`}
            />
            <span
              className={`block h-px w-full bg-ink transition-opacity duration-reveal ${
                menuOpen ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`block h-px w-full bg-ink transition-transform duration-reveal ease-reveal ${
                menuOpen ? '-translate-y-[7px] -rotate-45' : ''
              }`}
            />
          </div>
        </button>
      </nav>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: [0, 0, 0.2, 1] }}
            className="fixed inset-0 top-0 z-40 flex flex-col items-center justify-center bg-paper/98 backdrop-blur-sm md:hidden"
          >
            <ul className="flex flex-col items-center gap-8" role="list">
              {navLinks.map(({ to, label }) => (
                <li key={to}>
                  <NavLink
                    to={to}
                    className={({ isActive }) =>
                      `font-serif text-3xl tracking-wide focus-ring ${
                        isActive ? 'text-accent' : 'text-ink'
                      }`
                    }
                  >
                    {label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
