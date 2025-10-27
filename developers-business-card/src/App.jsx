import { useMemo } from "react";
import "./App.css";
import Card from "./Components/Card/Card.jsx";
import { teamMembers, getCategoryColors } from "./data/teamMembers.js";
import { useTeamMembers } from "./hooks/useTeamMembers.js";
import { getHeaderStyle, getSearchInputStyle, getInputFocusState } from "./utils/styleUtils.js";
import { getStaggeredAnimation } from "./utils/animationUtils.js";

function App() {
  const {
    filteredMembers,
    categories,
    stats,
    activeFilter,
    searchQuery,
    handleFilterClick,
    handleSearchChange,
    toggleCardExpand,
    clearFilters,
    isCardExpanded,
  } = useTeamMembers(teamMembers);

  const totalCount = teamMembers.length;
  const filteredCount = filteredMembers.length;

  const headerStyle = useMemo(() => getHeaderStyle(), []);
  const searchInputStyle = useMemo(() => getSearchInputStyle(), []);

  const handleInputFocus = (e, isFocused) => {
    const focusStyle = getInputFocusState(isFocused);
    Object.entries(focusStyle).forEach(([key, value]) => {
      e.target.style[key] = value;
    });
  };

  return (
    <div>
      <div className="wrapper">
        <header style={headerStyle}>
          <h1>Our Team</h1>
          <p className="subtitle">
            Meet our talented team members. Connect and collaborate with them.
          </p>
          <div
            style={{ marginTop: "20px", color: "#7f8c8d", fontSize: "0.9rem" }}
          >
            Showing {filteredCount} of {totalCount} members
          </div>
        </header>

        <div style={{ display: "flex", justifyContent: "center", marginBottom: "30px" }}>
          <input
            type="text"
            placeholder="Search by name, position, company, or skills..."
            value={searchQuery}
            onChange={handleSearchChange}
            style={searchInputStyle}
            onFocus={(e) => handleInputFocus(e, true)}
            onBlur={(e) => handleInputFocus(e, false)}
          />
        </div>

        <div className="filter-container">
          <button
            className={`filter-btn ${activeFilter === "all" ? "active" : ""}`}
            onClick={() => handleFilterClick("all")}
          >
            All ({totalCount})
          </button>
          {categories.map((cat) => (
            <button
              key={cat.name}
              className={`filter-btn ${
                activeFilter === cat.name ? "active" : ""
              }`}
              onClick={() => handleFilterClick(cat.name)}
            >
              {cat.displayName} ({cat.count})
            </button>
          ))}
        </div>

        <div className="cards-container">
          {filteredMembers.map((member, index) => (
            <div
              key={member.id}
              style={getStaggeredAnimation(index)}
            >
              <Card
                member={member}
                colors={getCategoryColors(member.id)}
                isExpanded={isCardExpanded(member.id)}
                onToggleExpand={toggleCardExpand}
              />
            </div>
          ))}
        </div>

        {filteredMembers.length === 0 && (
          <div
            style={{
              textAlign: "center",
              padding: "60px 20px",
              color: "#7f8c8d",
              fontSize: "1.2rem",
            }}
          >
            <i
              className="fas fa-search"
              style={{
                fontSize: "3rem",
                marginBottom: "20px",
                display: "block",
                opacity: 0.3,
              }}
            ></i>
            <p>No team members found matching your criteria.</p>
            <button
              onClick={clearFilters}
              style={{
                marginTop: "20px",
                padding: "10px 30px",
                border: "none",
                borderRadius: "25px",
                background: "linear-gradient(to right, #6a11cb, #2575fc)",
                color: "white",
                cursor: "pointer",
                fontSize: "1rem",
                fontWeight: "600",
                transition: "transform 0.2s ease",
              }}
              onMouseEnter={(e) =>
                (e.target.style.transform = "translateY(-2px)")
              }
              onMouseLeave={(e) => (e.target.style.transform = "translateY(0)")}
            >
              Clear Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
