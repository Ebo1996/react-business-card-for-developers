/**
 * Filter and search utilities for team members
 */

/**
 * Check if a member matches the filter category
 * @param {Object} member - Team member object
 * @param {string} activeFilter - Current active filter
 * @returns {boolean}
 */
export const matchesFilter = (member, activeFilter) => {
  return activeFilter === "all" || member.category === activeFilter;
};

/**
 * Check if a member matches the search query
 * @param {Object} member - Team member object
 * @param {string} searchQuery - Current search query
 * @returns {boolean}
 */
export const matchesSearch = (member, searchQuery) => {
  if (searchQuery === "") return true;

  const query = searchQuery.toLowerCase();
  const searchableFields = [
    member.name,
    member.position,
    member.company,
    ...member.skills,
  ];

  return searchableFields.some((field) =>
    field.toLowerCase().includes(query)
  );
};

/**
 * Filter team members based on filter and search criteria
 * @param {Array} members - Array of team member objects
 * @param {string} activeFilter - Current active filter
 * @param {string} searchQuery - Current search query
 * @returns {Array} Filtered array of team members
 */
export const filterMembers = (members, activeFilter, searchQuery) => {
  return members.filter(
    (member) =>
      matchesFilter(member, activeFilter) &&
      matchesSearch(member, searchQuery)
  );
};

/**
 * Get unique categories from team members
 * @param {Array} members - Array of team member objects
 * @returns {Array} Array of category objects with name, displayName, and count
 */
export const getCategories = (members) => {
  const cats = [...new Set(members.map((m) => m.category))];
  return cats.map((cat) => ({
    name: cat,
    displayName: cat.charAt(0).toUpperCase() + cat.slice(1),
    count: members.filter((m) => m.category === cat).length,
  }));
};

/**
 * Get member count by category
 * @param {Array} members - Array of team member objects
 * @param {string} category - Category name
 * @returns {number} Count of members in category
 */
export const getCategoryCount = (members, category) => {
  return members.filter((m) => m.category === category).length;
};

/**
 * Get statistics about filtered members
 * @param {Array} filteredMembers - Filtered array of members
 * @param {number} totalCount - Total number of members
 * @returns {Object} Statistics object
 */
export const getFilterStats = (filteredMembers, totalCount) => {
  return {
    showing: filteredMembers.length,
    total: totalCount,
    percentage: Math.round((filteredMembers.length / totalCount) * 100),
  };
};

