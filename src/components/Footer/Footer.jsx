import { useSmoothScroll } from '../../hooks/useSmoothScroll';
import './Footer.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { scrollToTop, scrollToElement } = useSmoothScroll();

  const footerLinks = [
    { label: 'Module 02', target: 'what-is-aigram' },
    { label: 'Module 03', target: 'experience-preview' },
    { label: 'Portal', target: 'pre-registration-form' },
  ];

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__shell">
          <div className="footer__brand">
            <p className="footer__label">AiGram System</p>
            <p className="footer__tagline">Intelligence for skill mastery.</p>
          </div>

          <nav className="footer__nav" aria-label="Footer Navigation">
            {footerLinks.map((link) => (
              <button key={link.label} className="footer__link" onClick={() => scrollToElement(link.target)}>
                {link.label}
              </button>
            ))}
            <button className="footer__link" onClick={scrollToTop}>
              Back To Top
            </button>
          </nav>
        </div>

        <p className="footer__copyright">(c) {currentYear} AiGram. All rights reserved.</p>
      </div>
    </footer>
  );
}
