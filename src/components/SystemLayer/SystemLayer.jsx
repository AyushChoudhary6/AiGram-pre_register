import PropTypes from 'prop-types';
import './SystemLayer.css';

const particles = Array.from({ length: 20 }, (_, index) => ({
  id: index,
  x: ((index * 11) % 100) + 1,
  y: ((index * 17) % 100) + 1,
  size: 1 + (index % 3),
  delay: (index % 6) * 1.2,
  duration: 16 + (index % 5) * 4,
}));

export default function SystemLayer({ modules, activeModuleId, progressPercent, pulsePresence }) {
  return (
    <>
      <div className="system-layer" aria-hidden="true">
        <div className="system-layer__mesh" />
        <div className="system-layer__mesh system-layer__mesh--secondary" />
        <div className="system-layer__lines" />
        <div className="system-layer__particles">
          {particles.map((particle) => (
            <span
              key={particle.id}
              className="system-layer__particle"
              style={{
                '--particle-x': `${particle.x}%`,
                '--particle-y': `${particle.y}%`,
                '--particle-size': `${particle.size}px`,
                '--particle-delay': `${particle.delay}s`,
                '--particle-duration': `${particle.duration}s`,
              }}
            />
          ))}
        </div>
      </div>

      <div className="system-status" role="status" aria-live="polite">
        <span className="system-status__label">SYSTEM STATUS</span>
        <span>AI CORE: ACTIVE</span>
        <span>LEARNING MODULES: ONLINE</span>
        <span>EARLY ACCESS: OPEN</span>
      </div>

      <aside className="journey-rail" aria-label="Journey Progress">
        <p className="journey-rail__text">Journey Progress | {progressPercent}% Complete</p>
        <div className="journey-rail__track">
          {modules.map((module) => (
            <span
              key={module.id}
              className={`journey-rail__dot ${activeModuleId === module.id ? 'journey-rail__dot--active' : ''}`}
              aria-hidden="true"
            />
          ))}
        </div>
      </aside>

      <div className={`ai-presence ${pulsePresence ? 'ai-presence--pulse' : ''}`}>
        <span className="ai-presence__orb" aria-hidden="true" />
        <span className="ai-presence__tooltip">AiGram adapts to how you learn.</span>
      </div>
    </>
  );
}

SystemLayer.propTypes = {
  modules: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ).isRequired,
  activeModuleId: PropTypes.string.isRequired,
  progressPercent: PropTypes.number.isRequired,
  pulsePresence: PropTypes.bool.isRequired,
};
