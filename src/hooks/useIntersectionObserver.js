import { useEffect, useRef } from 'react';

/**
 * useIntersectionObserver Hook
 * Triggers a callback when an element comes into view
 * @param {Object} options - Intersection Observer options
 * @param {number} options.threshold - Percentage of element visible (0-1)
 * @param {string} options.rootMargin - Margin around the root
 * @param {Function} options.onIntersect - Callback when element intersects
 */
export const useIntersectionObserver = (options = {}) => {
  const elementRef = useRef(null);
  const {
    threshold = 0.1,
    rootMargin = '0px',
    onIntersect = () => {},
  } = options;

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        onIntersect();
        // Stop observing after first intersection
        observer.unobserve(entry.target);
      }
    }, {
      threshold,
      rootMargin,
    });

    observer.observe(element);

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [threshold, rootMargin, onIntersect]);

  return elementRef;
};
