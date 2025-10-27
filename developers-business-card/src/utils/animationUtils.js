/**
 * Animation and transition utilities
 */

/**
 * Generate staggered animation delay based on index
 * @param {number} index - Item index
 * @param {number} delay - Base delay in seconds (default: 0.1)
 * @returns {string} CSS animation delay value
 */
export const getStaggerDelay = (index, delay = 0.1) => {
  return `${index * delay}s`;
};

/**
 * Generate animation style with staggered delay
 * @param {number} index - Item index
 * @param {string} animationName - CSS animation name
 * @param {number} duration - Animation duration in seconds (default: 0.5)
 * @param {number} delay - Base delay in seconds (default: 0.1)
 * @returns {Object} Animation style object
 */
export const getStaggeredAnimation = (
  index,
  animationName = "fadeInUp",
  duration = 0.5,
  delay = 0.1
) => {
  return {
    animation: `${animationName} ${duration}s ease ${getStaggerDelay(
      index,
      delay
    )} both`,
  };
};

/**
 * Generate transform style for expanded state
 * @param {boolean} isExpanded - Whether item is expanded
 * @param {string} translateY - Translate Y value for expanded state (default: "-10px")
 * @param {string} scale - Scale value for expanded state (default: "1.02")
 * @returns {Object} Transform style object
 */
export const getExpandTransform = (
  isExpanded,
  translateY = "-10px",
  scale = "1.02"
) => {
  if (isExpanded) {
    return {
      transform: `translateY(${translateY}) scale(${scale})`,
    };
  }
  return { transform: "translateY(0)" };
};

/**
 * Generate opacity transition
 * @param {boolean} visible - Whether element is visible
 * @param {number} duration - Transition duration in seconds (default: 0.3)
 * @returns {Object} Opacity style object
 */
export const getOpacityTransition = (visible, duration = 0.3) => {
  return {
    opacity: visible ? 1 : 0,
    transition: `opacity ${duration}s ease`,
  };
};

/**
 * Generate height transition
 * @param {boolean} expanded - Whether element is expanded
 * @param {string} expandedHeight - Height when expanded (default: "500px")
 * @param {string} collapsedHeight - Height when collapsed (default: "200px")
 * @param {number} duration - Transition duration in seconds (default: 0.4)
 * @returns {Object} Height style object
 */
export const getHeightTransition = (
  expanded,
  expandedHeight = "500px",
  collapsedHeight = "200px",
  duration = 0.4
) => {
  return {
    maxHeight: expanded ? expandedHeight : collapsedHeight,
    transition: `max-height ${duration}s ease`,
    overflow: "hidden",
  };
};

/**
 * Generate scale animation for click effects
 * @param {boolean} clicked - Whether element was clicked
 * @param {string} clickedScale - Scale value when clicked (default: "0.95")
 * @param {string} normalScale - Normal scale value (default: "1")
 * @returns {Object} Transform style object
 */
export const getClickScale = (
  clicked,
  clickedScale = "0.95",
  normalScale = "1"
) => {
  return {
    transform: clicked ? `scale(${clickedScale})` : `scale(${normalScale})`,
    transition: "all 0.2s ease",
  };
};

