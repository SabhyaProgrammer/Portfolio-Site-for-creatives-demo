import { motion } from 'framer-motion';
import { aboutData } from '../data/aboutData';
import ContactForm from '../components/ContactForm';

export default function Contact() {
  const { contact, social } = aboutData;

  return (
    <div className="pt-24 md:pt-28">
      <section className="relative overflow-hidden section-padding pb-16 md:pb-24">
        {/* Typographic background treatment */}
        <div
          className="pointer-events-none absolute -right-8 top-20 select-none font-serif text-[12rem] leading-none text-ink/[0.03] md:text-[18rem]"
          aria-hidden="true"
        >
          Hello
        </div>

        <div className="relative mx-auto grid max-w-7xl gap-16 lg:grid-cols-2 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: [0, 0, 0.2, 1] }}
          >
            <h1 className="page-heading">Contact</h1>
            <p className="mt-6 max-w-md text-base leading-relaxed text-mist md:text-lg">
              For editorial commissions, portrait sessions, or print inquiries — send a note with
              your timeline and vision. Based in {contact.location.split('·')[0].trim()}.
            </p>

            <address className="mt-10 space-y-3 not-italic">
              <p>
                <a
                  href={`mailto:${contact.email}`}
                  className="text-ink transition-colors duration-reveal hover:text-accent focus-ring"
                >
                  {contact.email}
                </a>
              </p>
              <p className="text-mist">{contact.phone}</p>
              <p className="text-sm text-mist">{contact.location}</p>
            </address>

            <ul className="mt-8 flex gap-6" role="list" aria-label="Social links">
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
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: [0, 0, 0.2, 1], delay: 0.1 }}
          >
            <ContactForm />
          </motion.div>
        </div>
      </section>
    </div>
  );
}
