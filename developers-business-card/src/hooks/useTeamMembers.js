import { useState, useMemo, useEffect } from "react";
import { filterMembers, getCategories, getFilterStats } from "../utils/filterUtils";
import { debounce } from "../utils/dataUtils";

/**
 * Custom hook for managing team members with filtering and search
 * @param {Array} members - Array of team member objects
 * @returns {Object} Object containing filtered members, filter functions, and stats
 */
export const useTeamMembers = (members) => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedCards, setExpandedCards] = useState(new Set());
  const [visibleCards, setVisibleCards] = useState([]);

  // Get categories dynamically from members
  const categories = useMemo(() => getCategories(members), [members]);

  // Filter members based on active filter and search query
  const filteredMembers = useMemo(
    () => filterMembers(members, activeFilter, searchQuery),
    [members, activeFilter, searchQuery]
  );

  // Get filter statistics
  const stats = useMemo(
    () => getFilterStats(filteredMembers, members.length),
    [filteredMembers, members.length]
  );

  // Animate cards appearing
  useEffect(() => {
    const timer = setTimeout(() => {
      setVisibleCards(filteredMembers.map((_, index) => index));
    }, 100);

    return () => clearTimeout(timer);
  }, [filteredMembers]);

  // Handle filter button clicks
  const handleFilterClick = (filter) => {
    setActiveFilter(filter);
    setExpandedCards(new Set());
  };

  // Toggle card expand state
  const toggleCardExpand = (memberId) => {
    const newExpanded = new Set(expandedCards);
    if (newExpanded.has(memberId)) {
      newExpanded.delete(memberId);
    } else {
      newExpanded.add(memberId);
    }
    setExpandedCards(newExpanded);
  };

  // Handle search input changes with debouncing option
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    setExpandedCards(new Set());
  };

  // Clear all filters
  const clearFilters = () => {
    setSearchQuery("");
    setActiveFilter("all");
    setExpandedCards(new Set());
  };

  // Check if a card is expanded
  const isCardExpanded = (memberId) => {
    return expandedCards.has(memberId);
  };

  return {
    // Data
    filteredMembers,
    categories,
    stats,
    
    // State
    activeFilter,
    searchQuery,
    visibleCards,
    
    // Actions
    handleFilterClick,
    handleSearchChange,
    toggleCardExpand,
    clearFilters,
    isCardExpanded,
    
    // Setters (for advanced usage)
    setActiveFilter,
    setSearchQuery,
  };
};

