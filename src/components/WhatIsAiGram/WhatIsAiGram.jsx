import { useState } from 'react';
import Card from '../shared/Card';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import './WhatIsAiGram.css';

const features = [
  {
    id: 1,
    title: 'Adaptive Skill Paths',
    description: 'AiGram maps your strengths and gaps, then routes you into the next challenge that compounds mastery.',
  },
  {
    id: 2,
    title: 'Signal Over Noise',
    description: 'Every learning node is filtered through verified creator and community activity so your time stays focused.',
  },
  {
    id: 3,
    title: 'Proof-Based Learning',
    description: 'Progress unlocks with submitted artifacts, practical challenges, and feedback loops tied to outcomes.',
  },
  {
    id: 4,
    title: 'Mastery Economy',
    description: 'Deploy tools, publish workflows, and earn through transparent reward mechanics tied to real value creation.',
  },
];

export default function WhatIsAiGram() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useIntersectionObserver({
    threshold: 0.1,
    onIntersect: () => setIsVisible(true),
  });

  return (
    <section
      ref={sectionRef}
      className={`what-is-aigram ${!isVisible ? 'scroll-slide-hidden' : 'scroll-slide-up'}`}
      id="what-is-aigram"
    >
      <div className="container">
        <div className="module-shell">
          <div className="module-meta">
            <span className="module-meta__label">SYSTEM MODULE 02 | WHAT AIGRAM IS</span>
            <span className="module-meta__pulse" aria-hidden="true" />
          </div>

          <div className="what-is-aigram__header">
            <h2 className="what-is-aigram__title">A living system for AI skill growth.</h2>
            <p className="what-is-aigram__subtitle">
              You are not browsing content feeds. You are entering structured progression.
            </p>
          </div>

          <div className={`what-is-aigram__grid ${!isVisible ? 'scroll-stagger-hidden' : 'scroll-stagger'}`}>
            {features.map((feature) => (
              <Card key={feature.id} variant="glass" hoverable className="what-is-aigram__card">
                <div className="feature-card">
                  <span className="feature-card__index">{String(feature.id).padStart(2, '0')}</span>
                  <h3 className="feature-card__title">{feature.title}</h3>
                  <p className="feature-card__description">{feature.description}</p>
                </div>
              </Card>
            ))}
          </div>

          <div className="progress-signal">
            <span className="progress-signal__arc" aria-hidden="true" />
            <span className="progress-signal__dots" aria-hidden="true">
              <span />
              <span />
              <span />
            </span>
            <span className="progress-signal__text">Journey Progress | 30% Complete</span>
          </div>
        </div>
      </div>
    </section>
  );
}
