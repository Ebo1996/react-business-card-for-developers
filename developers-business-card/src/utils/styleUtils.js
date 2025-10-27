/**
 * Style utility functions for generating dynamic styles
 */

/**
 * Generate gradient background style
 * @param {string} color1 - First gradient color
 * @param {string} color2 - Second gradient color
 * @param {string} direction - Gradient direction (default: "to right")
 * @returns {Object} Style object with gradient
 */
export const getGradientStyle = (color1, color2, direction = "to right") => {
  return {
    background: `linear-gradient(${direction}, ${color1}, ${color2})`,
    backgroundImage: `linear-gradient(${direction}, ${color1}, ${color2})`,
  };
};

/**
 * Generate common button styles
 * @param {Object} gradientColors - Object with color1 and color2
 * @param {Object} options - Additional style options
 * @returns {Object} Button style object
 */
export const getButtonStyle = (gradientColors, options = {}) => {
  const {
    width = "100%",
    padding = "14px",
    borderRadius = "50px",
    fontSize = "1rem",
    fontWeight = "600",
    marginBottom = "15px",
  } = options;

  return {
    ...getGradientStyle(gradientColors[0], gradientColors[1]),
    width,
    padding,
    textAlign: "center",
    border: "none",
    borderRadius,
    fontSize,
    fontWeight,
    cursor: "pointer",
    boxShadow: "0 5px 15px rgba(0, 0, 0, 0.1)",
    marginBottom,
    color: "white",
    transition: "all 0.3s ease",
  };
};

/**
 * Generate social link styles
 * @param {Object} gradientColors - Object with color1 and color2
 * @param {Object} size - Size of the icon (default: {width: "36px", height: "36px"})
 * @returns {Object} Social link style object
 */
export const getSocialLinkStyle = (
  gradientColors,
  size = { width: "36px", height: "36px" }
) => {
  return {
    ...getGradientStyle(gradientColors[0], gradientColors[1]),
    width: size.width,
    height: size.height,
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
    fontSize: "1rem",
    textDecoration: "none",
    cursor: "pointer",
    transition: "all 0.3s ease",
    transform: "scale(1)",
  };
};

/**
 * Generate hover effect style
 * @param {boolean} isHovered - Whether element is hovered
 * @param {string} transform - Transform value when hovered
 * @returns {Object} Transform style object
 */
export const getHoverEffect = (isHovered, transform = "translateY(-3px)") => {
  return {
    transform: isHovered ? transform : "translateY(0)",
  };
};

/**
 * Generate focus state styles for inputs
 * @param {boolean} isFocused - Whether input is focused
 * @returns {Object} Style object for focused state
 */
export const getInputFocusState = (isFocused) => {
  if (isFocused) {
    return {
      borderColor: "#3498db",
      boxShadow: "0 4px 15px rgba(52, 152, 219, 0.2)",
    };
  }
  return {
    borderColor: "#e0e0e0",
    boxShadow: "0 2px 10px rgba(0, 0, 0, 0.05)",
  };
};

/**
 * Generate card header style
 * @param {Object} options - Style options
 * @returns {Object} Header style object
 */
export const getHeaderStyle = (options = {}) => {
  const {
    textAlign = "center",
    marginBottom = "50px",
    color = "#2c3e50",
  } = options;

  return {
    textAlign,
    marginBottom,
    color,
  };
};

/**
 * Generate search input style
 * @param {number} width - Width of input (default: 400)
 * @returns {Object} Input style object
 */
export const getSearchInputStyle = (width = 400) => {
  return {
    padding: "12px 20px",
    border: "2px solid #e0e0e0",
    borderRadius: "50px",
    fontSize: "1rem",
    width: `${width}px`,
    maxWidth: "100%",
    outline: "none",
    transition: "all 0.3s ease",
    boxShadow: "0 2px 10px rgba(0, 0, 0, 0.05)",
  };
};

/**
 * Combine multiple style objects
 * @param {...Object} styles - Style objects to combine
 * @returns {Object} Combined style object
 */
export const combineStyles = (...styles) => {
  return Object.assign({}, ...styles);
};

