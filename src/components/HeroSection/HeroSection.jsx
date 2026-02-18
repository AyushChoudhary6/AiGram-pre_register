import Button from '../shared/Button';
import { useSmoothScroll } from '../../hooks/useSmoothScroll';
import './HeroSection.css';

export default function HeroSection() {
  const { scrollToElement } = useSmoothScroll();

  return (
    <section className="hero" id="hero">
      <div className="container">
        <div className="module-shell hero__shell">
          <div className="module-meta">
            <span className="module-meta__label">SYSTEM MODULE 01 | CORE BOOT</span>
            <span className="module-meta__pulse" aria-hidden="true" />
          </div>

          <div className="hero__content">
            <p className="hero__kicker">AI LEARNING SYSTEM | PRE-REGISTRATION</p>
            <h1 className="hero__title">AiGram</h1>
            <p className="hero__tagline">An adaptive intelligence layer for skill mastery.</p>
            <p className="hero__subtitle">
              AiGram tracks how you learn, calibrates what to practice next, and rewards proof of progress through levels,
              XP, and measurable mastery.
            </p>

            <div className="hero__cta">
              <Button variant="primary" size="lg" onClick={() => scrollToElement('pre-registration-form')}>
                Request Early Access
              </Button>
              <Button variant="outline" size="lg" onClick={() => scrollToElement('what-is-aigram')}>
                Enter Module Flow
              </Button>
            </div>

            <div className="progress-signal">
              <span className="progress-signal__arc" aria-hidden="true" />
              <span className="progress-signal__dots" aria-hidden="true">
                <span />
                <span />
                <span />
              </span>
              <span className="progress-signal__text">Journey Progress | 10% Complete</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
