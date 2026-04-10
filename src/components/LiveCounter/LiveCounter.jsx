import React, { useState, useEffect, useRef } from 'react';
import './LiveCounter.css';

const TIMING = {
  MIN_DELAY: 800,
  MAX_DELAY: 9000,
};

const getWeightedIncrement = () => {
  const random = Math.random();
  if (random < 0.55) return 1;
  if (random < 0.80) return 2;
  if (random < 0.93) return 3;
  return Math.floor(Math.random() * 3) + 4; // 4-6
};

const FloatingIncrement = ({ value, onAnimationEnd }) => {
  return (
    <div
      className="floating-increment"
      onAnimationEnd={onAnimationEnd}
    >
      <span className="floating-text">+{value}</span>
    </div>
  );
};

const LiveBadge = () => {
  return (
    <div className="live-badge">
      <div className="live-dot" />
      <span className="live-text">live</span>
    </div>
  );
};

export default function LiveCounter() {
  const [count, setCount] = useState(38002);
  const [floatingIncrements, setFloatingIncrements] = useState([]);
  const incrementIdRef = useRef(0);
  const intervalRef = useRef(null);

  const scheduleNextIncrement = () => {
    const delay =
      Math.random() * (TIMING.MAX_DELAY - TIMING.MIN_DELAY) +
      TIMING.MIN_DELAY;

    intervalRef.current = setTimeout(() => {
      const increment = getWeightedIncrement();

      // Add floating animation
      const incrementId = incrementIdRef.current++;
      setFloatingIncrements((prev) => [
        ...prev,
        { id: incrementId, value: increment },
      ]);

      // Update count
      setCount((prev) => prev + increment);

      // Schedule next increment
      scheduleNextIncrement();
    }, delay);
  };

  const handleFloatingAnimationEnd = (id) => {
    setFloatingIncrements((prev) =>
      prev.filter((item) => item.id !== id)
    );
  };

  useEffect(() => {
    scheduleNextIncrement();

    return () => {
      if (intervalRef.current) {
        clearTimeout(intervalRef.current);
      }
    };
  }, []);

  const formattedCount = count.toLocaleString();

  return (
    <div className="live-counter-container">
      <div className="live-counter-card">
        <LiveBadge />

        <div className="counter-wrapper">
          <div className="number">{formattedCount}</div>

          <div className="floating-increments-container">
            {floatingIncrements.map((item) => (
              <FloatingIncrement
                key={item.id}
                value={item.value}
                onAnimationEnd={() =>
                  handleFloatingAnimationEnd(item.id)
                }
              />
            ))}
          </div>
        </div>

        <div className="label">Early Access Reservations</div>
        <div className="subtitle">Joining the AiGram revolution</div>
      </div>
    </div>
  );
}
