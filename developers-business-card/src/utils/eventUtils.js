/**
 * Event handling and DOM manipulation utilities
 */

/**
 * Prevent event default behavior and propagation
 * @param {Event} e - Event object
 */
export const stopEvent = (e) => {
  e.preventDefault();
  e.stopPropagation();
};

/**
 * Handle click event with callback
 * @param {Function} callback - Function to call on click
 * @param {boolean} preventDefault - Whether to prevent default behavior
 * @returns {Function} Event handler function
 */
export const handleClick = (callback, preventDefault = true) => {
  return (e) => {
    if (preventDefault) {
      stopEvent(e);
    }
    callback(e);
  };
};

/**
 * Handle form submission
 * @param {Function} onSubmit - Function to call on submit
 * @returns {Function} Event handler function
 */
export const handleSubmit = (onSubmit) => {
  return (e) => {
    e.preventDefault();
    onSubmit(e);
  };
};

/**
 * Handle input change with value extraction
 * @param {Function} onChange - Function to call with new value
 * @returns {Function} Event handler function
 */
export const handleInputChange = (onChange) => {
  return (e) => {
    onChange(e.target.value);
  };
};

/**
 * Handle keyboard events
 * @param {Object} keyHandlers - Object mapping keys to handlers
 * @returns {Function} Event handler function
 */
export const handleKeyPress = (keyHandlers) => {
  return (e) => {
    const handler = keyHandlers[e.key];
    if (handler) {
      handler(e);
    }
  };
};

/**
 * Detect if element is in viewport
 * @param {HTMLElement} element - DOM element
 * @returns {boolean} Whether element is in viewport
 */
export const isInViewport = (element) => {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
};

/**
 * Get element position relative to viewport
 * @param {HTMLElement} element - DOM element
 * @returns {Object} Position object with top, left, right, bottom
 */
export const getElementPosition = (element) => {
  return element.getBoundingClientRect();
};

/**
 * Scroll to element smoothly
 * @param {HTMLElement|string} element - DOM element or selector
 * @param {Object} options - Scroll options
 */
export const scrollToElement = (
  element,
  options = { behavior: "smooth", block: "start" }
) => {
  const el = typeof element === "string" ? document.querySelector(element) : element;
  if (el) {
    el.scrollIntoView(options);
  }
};

/**
 * Add event listener with automatic cleanup
 * @param {HTMLElement} element - DOM element
 * @param {string} event - Event type
 * @param {Function} handler - Event handler
 * @returns {Function} Cleanup function
 */
export const addEventListener = (element, event, handler) => {
  element.addEventListener(event, handler);
  return () => {
    element.removeEventListener(event, handler);
  };
};

/**
 * Copy text to clipboard
 * @param {string} text - Text to copy
 * @returns {Promise<boolean>} Success status
 */
export const copyToClipboard = async (text) => {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch (err) {
    // Fallback for older browsers
    const textArea = document.createElement("textarea");
    textArea.value = text;
    textArea.style.position = "fixed";
    textArea.style.left = "-999999px";
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    const success = document.execCommand("copy");
    textArea.remove();
    return success;
  }
};

/**
 * Download data as file
 * @param {string} data - Data to download
 * @param {string} filename - Filename
 * @param {string} mimeType - MIME type (default: "text/plain")
 */
export const downloadFile = (
  data,
  filename,
  mimeType = "text/plain"
) => {
  const blob = new Blob([data], { type: mimeType });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
};

