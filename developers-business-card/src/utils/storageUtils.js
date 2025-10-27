/**
 * Local storage and session storage utilities
 */

const STORAGE_PREFIX = "team_card_";

/**
 * Get storage key with prefix
 * @param {string} key - Storage key
 * @returns {string} Prefixed key
 */
const getStorageKey = (key) => `${STORAGE_PREFIX}${key}`;

/**
 * Save to localStorage
 * @param {string} key - Storage key
 * @param {*} value - Value to store
 * @returns {boolean} Success status
 */
export const saveToStorage = (key, value) => {
  try {
    const serializedValue = JSON.stringify(value);
    localStorage.setItem(getStorageKey(key), serializedValue);
    return true;
  } catch (error) {
    console.error("Error saving to localStorage:", error);
    return false;
  }
};

/**
 * Load from localStorage
 * @param {string} key - Storage key
 * @param {*} defaultValue - Default value if not found
 * @returns {*} Stored value or default
 */
export const loadFromStorage = (key, defaultValue = null) => {
  try {
    const item = localStorage.getItem(getStorageKey(key));
    return item ? JSON.parse(item) : defaultValue;
  } catch (error) {
    console.error("Error loading from localStorage:", error);
    return defaultValue;
  }
};

/**
 * Remove from localStorage
 * @param {string} key - Storage key
 * @returns {boolean} Success status
 */
export const removeFromStorage = (key) => {
  try {
    localStorage.removeItem(getStorageKey(key));
    return true;
  } catch (error) {
    console.error("Error removing from localStorage:", error);
    return false;
  }
};

/**
 * Clear all app data from localStorage
 */
export const clearAppStorage = () => {
  try {
    Object.keys(localStorage)
      .filter((key) => key.startsWith(STORAGE_PREFIX))
      .forEach((key) => localStorage.removeItem(key));
    return true;
  } catch (error) {
    console.error("Error clearing app storage:", error);
    return false;
  }
};

/**
 * Save to sessionStorage
 * @param {string} key - Storage key
 * @param {*} value - Value to store
 * @returns {boolean} Success status
 */
export const saveToSession = (key, value) => {
  try {
    const serializedValue = JSON.stringify(value);
    sessionStorage.setItem(getStorageKey(key), serializedValue);
    return true;
  } catch (error) {
    console.error("Error saving to sessionStorage:", error);
    return false;
  }
};

/**
 * Load from sessionStorage
 * @param {string} key - Storage key
 * @param {*} defaultValue - Default value if not found
 * @returns {*} Stored value or default
 */
export const loadFromSession = (key, defaultValue = null) => {
  try {
    const item = sessionStorage.getItem(getStorageKey(key));
    return item ? JSON.parse(item) : defaultValue;
  } catch (error) {
    console.error("Error loading from sessionStorage:", error);
    return defaultValue;
  }
};

/**
 * Check if localStorage is available
 * @returns {boolean} Whether localStorage is available
 */
export const isStorageAvailable = () => {
  try {
    const test = "__storage_test__";
    localStorage.setItem(test, test);
    localStorage.removeItem(test);
    return true;
  } catch (e) {
    return false;
  }
};

/**
 * Get storage size in bytes
 * @returns {number} Total size in bytes
 */
export const getStorageSize = () => {
  let total = 0;
  for (let key in localStorage) {
    if (localStorage.hasOwnProperty(key)) {
      total += localStorage[key].length + key.length;
    }
  }
  return total;
};

