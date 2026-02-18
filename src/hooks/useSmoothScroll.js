/**
 * useSmoothScroll Hook
 * Provides smooth scroll functionality for the application
 */

export const useSmoothScroll = () => {
  /**
   * Scroll to a specific element by ID with smooth behavior
   * @param {string} elementId - The ID of the element to scroll to
   */
  const scrollToElement = (elementId) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  /**
   * Scroll to the top of the page with smooth behavior
   */
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  /**
   * Scroll to a specific position with smooth behavior
   * @param {number} top - The vertical position to scroll to
   * @param {number} left - The horizontal position to scroll to (optional)
   */
  const scrollToPosition = (top, left = 0) => {
    window.scrollTo({ top, left, behavior: 'smooth' });
  };

  return {
    scrollToElement,
    scrollToTop,
    scrollToPosition,
  };
};
