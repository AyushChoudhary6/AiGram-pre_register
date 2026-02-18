import { useState } from 'react';
import Card from '../shared/Card';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import './ExperiencePreview.css';

const previews = [
  {
    id: 1,
    title: 'Practice Arena',
    description: 'Scenario-driven drills build real execution speed, not passive familiarity.',
    image: '/practice_arena.png',
  },
  {
    id: 2,
    title: 'Skill Validation',
    description: 'Upload proof of work and move from attempt to verified progression with XP rewards.',
    image: '/ai_chat_interface.png',
  },
  {
    id: 3,
    title: 'Level Intelligence',
    description: 'Your level path updates dynamically as your outputs improve and your learning pattern evolves.',
    image: '/level_progression.png',
  },
];

export default function ExperiencePreview() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useIntersectionObserver({
    threshold: 0.1,
    onIntersect: () => setIsVisible(true),
  });

  const currentPreview = previews[currentIndex];

  return (
    <section
      ref={sectionRef}
      className={`experience-preview ${!isVisible ? 'scroll-slide-hidden' : 'scroll-slide-up'}`}
      id="experience-preview"
    >
      <div className="container">
        <div className="module-shell">
          <div className="module-meta">
            <span className="module-meta__label">SYSTEM MODULE 03 | HOW AIGRAM WORKS</span>
            <span className="module-meta__pulse" aria-hidden="true" />
          </div>

          <div className="experience-preview__header">
            <h2 className="experience-preview__title">Learn, prove, level up.</h2>
            <p className="experience-preview__caption">Each scroll step mirrors progression through the live system.</p>
          </div>

          <Card variant="default" className={`experience-preview__card ${!isVisible ? 'scroll-scale-hidden' : 'scroll-scale-up'}`}>
            <div className="experience-preview__carousel">
              <button
                className="carousel__button carousel__button--prev"
                onClick={() => setCurrentIndex((prevIndex) => (prevIndex === 0 ? previews.length - 1 : prevIndex - 1))}
                aria-label="Previous module preview"
              >
                &#8592;
              </button>

              <div className="carousel__content">
                <div className="carousel__image-container">
                  <img src={currentPreview.image} alt={currentPreview.title} className="carousel__image" />
                </div>
                <div className="carousel__info">
                  <span className="carousel__meta">ACTIVE SUBMODULE {String(currentPreview.id).padStart(2, '0')}</span>
                  <h3 className="carousel__title">{currentPreview.title}</h3>
                  <p className="carousel__description">{currentPreview.description}</p>
                </div>
              </div>

              <button
                className="carousel__button carousel__button--next"
                onClick={() => setCurrentIndex((prevIndex) => (prevIndex === previews.length - 1 ? 0 : prevIndex + 1))}
                aria-label="Next module preview"
              >
                &#8594;
              </button>
            </div>

            <div className="carousel__indicators">
              {previews.map((preview, index) => (
                <button
                  key={preview.id}
                  className={`carousel__indicator ${index === currentIndex ? 'carousel__indicator--active' : ''}`}
                  onClick={() => setCurrentIndex(index)}
                  aria-label={`Go to module preview ${index + 1}`}
                />
              ))}
            </div>
          </Card>

          <div className="progress-signal">
            <span className="progress-signal__arc" aria-hidden="true" />
            <span className="progress-signal__dots" aria-hidden="true">
              <span />
              <span />
              <span />
            </span>
            <span className="progress-signal__text">Journey Progress | 52% Complete</span>
          </div>
        </div>
      </div>
    </section>
  );
}
