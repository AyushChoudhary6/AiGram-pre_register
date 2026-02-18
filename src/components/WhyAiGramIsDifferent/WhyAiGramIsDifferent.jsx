import { useState } from 'react';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import './WhyAiGramIsDifferent.css';

const reasons = [
  {
    id: 1,
    point: 'One System, Multiple Learning Modes',
    description: 'Content, drills, and deployment workflows stay connected so context is never lost.',
  },
  {
    id: 2,
    point: 'Progress You Can Verify',
    description: 'Levels and XP reflect submitted work quality, not passive watch time.',
  },
  {
    id: 3,
    point: 'Calm, High-Signal Interface',
    description: 'The UI stays focused on decisions and momentum, not distraction mechanics.',
  },
  {
    id: 4,
    point: 'Built for Serious Learners',
    description: 'AiGram is designed for people building durable capability, not chasing novelty.',
  },
];

export default function WhyAiGramIsDifferent() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useIntersectionObserver({
    threshold: 0.1,
    onIntersect: () => setIsVisible(true),
  });

  return (
    <section ref={sectionRef} className={`why-different ${!isVisible ? 'scroll-slide-hidden' : 'scroll-slide-up'}`} id="why-different">
      <div className="container">
        <div className="module-shell">
          <div className="module-meta">
            <span className="module-meta__label">SYSTEM MODULE 04 | DIFFERENTIATION ENGINE</span>
            <span className="module-meta__pulse" aria-hidden="true" />
          </div>

          <div className="why-different__header">
            <h2 className="why-different__title">Not another AI app. A mastery operating layer.</h2>
          </div>

          <div className={`why-different__list ${!isVisible ? 'scroll-stagger-hidden' : 'scroll-stagger'}`}>
            {reasons.map((reason) => (
              <article key={reason.id} className="why-different__item">
                <span className="why-different__number">{String(reason.id).padStart(2, '0')}</span>
                <div className="why-different__content">
                  <h3 className="why-different__point">{reason.point}</h3>
                  <p className="why-different__description">{reason.description}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="progress-signal">
            <span className="progress-signal__arc" aria-hidden="true" />
            <span className="progress-signal__dots" aria-hidden="true">
              <span />
              <span />
              <span />
            </span>
            <span className="progress-signal__text">Journey Progress | 76% Complete</span>
          </div>
        </div>
      </div>
    </section>
  );
}
