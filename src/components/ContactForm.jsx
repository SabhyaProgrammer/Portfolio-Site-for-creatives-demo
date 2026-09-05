import { useState } from 'react';

const PROJECT_TYPES = [
  'Editorial Commission',
  'Portrait Session',
  'Fine-Art Print',
  'Collaboration',
  'Other',
];

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * Placeholder for real form submission integration.
 * Replace with Formspree, EmailJS, or a custom API endpoint.
 *
 * @param {{ name: string, email: string, subject: string, message: string }} formData
 * @returns {Promise<{ success: boolean }>}
 */
async function submitContactForm(formData) {
  // Simulate network delay — replace with real fetch call
  console.info('[submitContactForm] Placeholder submission:', formData);
  await new Promise((resolve) => setTimeout(resolve, 1500));
  return { success: true };
}

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: PROJECT_TYPES[0],
    message: '',
  });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle | loading | success

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!EMAIL_REGEX.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus('loading');
    try {
      await submitContactForm(formData);
      setStatus('success');
      setFormData({ name: '', email: '', subject: PROJECT_TYPES[0], message: '' });
    } catch {
      setStatus('idle');
      setErrors({ form: 'Something went wrong. Please try again.' });
    }
  };

  if (status === 'success') {
    return (
      <div className="border border-ink/10 bg-paper p-8 md:p-10" role="status">
        <p className="font-serif text-2xl text-ink">Message sent</p>
        <p className="mt-3 text-mist">
          Thank you for reaching out. Mara typically responds within 2–3 business days.
        </p>
        <button
          type="button"
          onClick={() => setStatus('idle')}
          className="mt-6 text-sm uppercase tracking-widest text-accent transition-colors duration-reveal hover:text-ink focus-ring"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-6">
      {errors.form && (
        <p className="text-sm text-red-700" role="alert">
          {errors.form}
        </p>
      )}

      <div>
        <label htmlFor="name" className="block text-sm uppercase tracking-widest text-mist">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? 'name-error' : undefined}
          className="mt-2 w-full border-b border-ink/20 bg-transparent py-3 text-ink transition-colors duration-reveal focus:border-accent focus:outline-none"
        />
        {errors.name && (
          <p id="name-error" className="mt-1 text-sm text-red-700" role="alert">
            {errors.name}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="email" className="block text-sm uppercase tracking-widest text-mist">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? 'email-error' : undefined}
          className="mt-2 w-full border-b border-ink/20 bg-transparent py-3 text-ink transition-colors duration-reveal focus:border-accent focus:outline-none"
        />
        {errors.email && (
          <p id="email-error" className="mt-1 text-sm text-red-700" role="alert">
            {errors.email}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="subject" className="block text-sm uppercase tracking-widest text-mist">
          Project Type
        </label>
        <select
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          className="mt-2 w-full border-b border-ink/20 bg-transparent py-3 text-ink transition-colors duration-reveal focus:border-accent focus:outline-none"
        >
          {PROJECT_TYPES.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm uppercase tracking-widest text-mist">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          value={formData.message}
          onChange={handleChange}
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? 'message-error' : undefined}
          className="mt-2 w-full resize-y border-b border-ink/20 bg-transparent py-3 text-ink transition-colors duration-reveal focus:border-accent focus:outline-none"
        />
        {errors.message && (
          <p id="message-error" className="mt-1 text-sm text-red-700" role="alert">
            {errors.message}
          </p>
        )}
      </div>

      <button
        type="submit"
        disabled={status === 'loading'}
        className="inline-flex items-center gap-2 bg-ink px-8 py-3 text-sm uppercase tracking-widest text-paper transition-opacity duration-reveal hover:opacity-90 focus-ring disabled:opacity-50"
      >
        {status === 'loading' ? 'Sending…' : 'Send message'}
      </button>
    </form>
  );
}
