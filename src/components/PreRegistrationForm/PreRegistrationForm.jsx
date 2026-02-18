import { useState } from 'react';
import Button from '../shared/Button';
import Card from '../shared/Card';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import './PreRegistrationForm.css';

export default function PreRegistrationForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [portalGlow, setPortalGlow] = useState({ x: '50%', y: '50%' });

  const sectionRef = useIntersectionObserver({
    threshold: 0.1,
    onIntersect: () => setIsVisible(true),
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((previous) => ({ ...previous, [name]: value }));
    setError('');
  };

  const validateForm = () => {
    if (!formData.fullName.trim()) return 'Please enter your full name.';
    if (!formData.email.trim()) return 'Please enter your email address.';
    if (!formData.email.includes('@')) return 'Please enter a valid email address.';
    if (!formData.phone.trim()) return 'Please enter your phone number.';
    return '';
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const validationError = validateForm();
    if (validationError) {
      setError(validationError);
      return;
    }

    setLoading(true);
    setError('');

    try {
      const payload = {
        name: formData.fullName,
        email: formData.email,
        phone: formData.phone,
      };

      await fetch('https://script.google.com/macros/s/AKfycbyM68GJOacJqVP12BvjQyr8zh4FTR5K9JqWOjuDPoXkhpLGW0yttCgi3Omi_vgg7au5Rg/exec', {
        method: 'POST',
        mode: 'no-cors',
        body: JSON.stringify(payload),
      });

      setSubmitted(true);
      setFormData({ fullName: '', email: '', phone: '' });
      setTimeout(() => setSubmitted(false), 5000);
    } catch (submitError) {
      setError('Something went wrong. Please try again.');
      console.error('Form submission error:', submitError);
    } finally {
      setLoading(false);
    }
  };

  const handlePortalMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    setPortalGlow({
      x: `${((event.clientX - rect.left) / rect.width) * 100}%`,
      y: `${((event.clientY - rect.top) / rect.height) * 100}%`,
    });
  };

  return (
    <section
      ref={sectionRef}
      className={`pre-registration-form ${!isVisible ? 'scroll-slide-hidden' : 'scroll-slide-up'}`}
      id="pre-registration-form"
    >
      <div className="container">
        <div className="module-shell pre-registration-form__shell">
          <div className="module-meta">
            <span className="module-meta__label">SYSTEM MODULE 05 | EARLY ACCESS PORTAL</span>
            <span className="module-meta__pulse" aria-hidden="true" />
          </div>

          <Card
            variant="glass"
            className={`pre-registration-form__card ${!isVisible ? 'scroll-scale-hidden' : 'scroll-scale-up'}`}
            style={{ '--portal-x': portalGlow.x, '--portal-y': portalGlow.y }}
            onMouseMove={handlePortalMove}
          >
            {submitted ? (
              <div className="success-state">
                <h2 className="success-state__title">Access Reserved [OK]</h2>
                <p className="success-state__message">Your place in the system is now reserved.</p>
              </div>
            ) : (
              <>
                <div className="pre-registration-form__header">
                  <h2 className="pre-registration-form__title">Request Early Access</h2>
                  <p className="pre-registration-form__subtitle">
                    You are not signing up for a newsletter. You are reserving a place in the system.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="pre-registration-form__content">
                  <label className="form-group" htmlFor="fullName">
                    <span className="form-label">Full Name</span>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      className="form-input"
                      placeholder="Your name"
                      value={formData.fullName}
                      onChange={handleChange}
                      required
                    />
                  </label>

                  <label className="form-group" htmlFor="email">
                    <span className="form-label">Email Address</span>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="form-input"
                      placeholder="you@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </label>

                  <label className="form-group" htmlFor="phone">
                    <span className="form-label">Phone Number</span>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="form-input"
                      placeholder="+1 (555) 000-0000"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />
                  </label>

                  {error && (
                    <div className="form-error" role="alert">
                      {error}
                    </div>
                  )}

                  <Button type="submit" variant="primary" size="lg" fullWidth disabled={loading}>
                    {loading ? 'Syncing Access...' : 'Reserve Access'}
                  </Button>
                </form>

                <p className="pre-registration-form__privacy">No spam. Ever. Your data stays private.</p>
              </>
            )}
          </Card>

          <div className="progress-signal">
            <span className="progress-signal__arc" aria-hidden="true" />
            <span className="progress-signal__dots" aria-hidden="true">
              <span />
              <span />
              <span />
            </span>
            <span className="progress-signal__text">Journey Progress | 100% Complete</span>
          </div>
        </div>
      </div>
    </section>
  );
}
