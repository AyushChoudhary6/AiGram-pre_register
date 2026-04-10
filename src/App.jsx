import { useEffect, useMemo, useRef, useState } from 'react';
import HeroSection from './components/HeroSection/HeroSection';
import WhatIsAiGram from './components/WhatIsAiGram/WhatIsAiGram';
import ExperiencePreview from './components/ExperiencePreview/ExperiencePreview';
import WhyAiGramIsDifferent from './components/WhyAiGramIsDifferent/WhyAiGramIsDifferent';
import PreRegistrationForm from './components/PreRegistrationForm/PreRegistrationForm';
import LiveCounter from './components/LiveCounter/LiveCounter';
import Footer from './components/Footer/Footer';
import SystemLayer from './components/SystemLayer/SystemLayer';
import './App.css';

function App() {
  const modules = useMemo(
    () => [
      { id: 'hero', progress: 10 },
      { id: 'what-is-aigram', progress: 30 },
      { id: 'experience-preview', progress: 52 },
      { id: 'why-different', progress: 76 },
      { id: 'pre-registration-form', progress: 100 },
    ],
    []
  );
  const [activeModuleId, setActiveModuleId] = useState(modules[0].id);
  const [pulsePresence, setPulsePresence] = useState(false);
  const pulseTimeoutRef = useRef(null);

  useEffect(() => {
    const onScroll = () => {
      document.documentElement.style.setProperty('--scroll-offset', `${window.scrollY}px`);
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const elements = modules
      .map((module) => document.getElementById(module.id))
      .filter(Boolean);

    if (elements.length === 0) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const activeEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (activeEntry) {
          const nextId = activeEntry.target.id;
          setActiveModuleId((currentId) => {
            if (currentId === nextId) return currentId;
            setPulsePresence(true);
            if (pulseTimeoutRef.current) {
              window.clearTimeout(pulseTimeoutRef.current);
            }
            pulseTimeoutRef.current = window.setTimeout(() => {
              setPulsePresence(false);
            }, 700);
            return nextId;
          });
        }
      },
      {
        threshold: [0.2, 0.35, 0.55],
        rootMargin: '-15% 0px -25% 0px',
      }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, [modules]);

  useEffect(
    () => () => {
      if (pulseTimeoutRef.current) {
        window.clearTimeout(pulseTimeoutRef.current);
      }
    },
    []
  );

  const progressPercent = modules.find((module) => module.id === activeModuleId)?.progress ?? 10;

  return (
    <div className="app">
      <SystemLayer
        modules={modules}
        activeModuleId={activeModuleId}
        progressPercent={progressPercent}
        pulsePresence={pulsePresence}
      />
      <HeroSection />
      <WhatIsAiGram />
      <ExperiencePreview />
      <WhyAiGramIsDifferent />
      <PreRegistrationForm />
      <LiveCounter />
      <section className="emotional-anchor">
        <div className="container">
          <p className="emotional-anchor__line">
            The future will not reward attention. It will reward mastery.
          </p>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default App;
