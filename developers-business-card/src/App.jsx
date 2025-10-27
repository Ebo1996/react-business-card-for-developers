import { useState, useMemo, useEffect } from "react";
import "./App.css";
import Card from "./Components/Card/Card.jsx";
import { teamMembers, getCategoryColors } from "./data/teamMembers.js";

function App() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedCards, setExpandedCards] = useState(new Set());
  const [visibleCards, setVisibleCards] = useState([]);

  // Get unique categories from members
  const categories = useMemo(() => {
    const cats = [...new Set(teamMembers.map((m) => m.category))];
    return cats.map((cat) => ({
      name: cat,
      displayName: cat.charAt(0).toUpperCase() + cat.slice(1),
      count: teamMembers.filter((m) => m.category === cat).length,
    }));
  }, []);

  // Filter and search logic
  const filteredMembers = useMemo(() => {
    return teamMembers.filter((member) => {
      const matchesFilter =
        activeFilter === "all" || member.category === activeFilter;
      const matchesSearch =
        searchQuery === "" ||
        member.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        member.position.toLowerCase().includes(searchQuery.toLowerCase()) ||
        member.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
        member.skills.some((skill) =>
          skill.toLowerCase().includes(searchQuery.toLowerCase())
        );

      return matchesFilter && matchesSearch;
    });
  }, [activeFilter, searchQuery]);

  // Animate cards appearing
  useEffect(() => {
    const timer = setTimeout(() => {
      setVisibleCards(filteredMembers.map((_, index) => index));
    }, 100);

    return () => clearTimeout(timer);
  }, [filteredMembers]);

  const handleFilterClick = (filter) => {
    setActiveFilter(filter);
    setExpandedCards(new Set());
  };

  const toggleCardExpand = (memberId) => {
    const newExpanded = new Set(expandedCards);
    if (newExpanded.has(memberId)) {
      newExpanded.delete(memberId);
    } else {
      newExpanded.add(memberId);
    }
    setExpandedCards(newExpanded);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    setExpandedCards(new Set());
  };

  const totalCount = teamMembers.length;
  const filteredCount = filteredMembers.length;

  const headerStyle = {
    textAlign: "center",
    marginBottom: "50px",
    color: "#2c3e50",
  };

  const searchContainerStyle = {
    display: "flex",
    justifyContent: "center",
    marginBottom: "30px",
  };

  const searchInputStyle = {
    padding: "12px 20px",
    border: "2px solid #e0e0e0",
    borderRadius: "50px",
    fontSize: "1rem",
    width: "400px",
    maxWidth: "100%",
    outline: "none",
    transition: "all 0.3s ease",
    boxShadow: "0 2px 10px rgba(0, 0, 0, 0.05)",
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

        <div style={searchContainerStyle}>
          <input
            type="text"
            placeholder="Search by name, position, company, or skills..."
            value={searchQuery}
            onChange={handleSearchChange}
            style={searchInputStyle}
            onFocus={(e) => {
              e.target.style.borderColor = "#3498db";
              e.target.style.boxShadow = "0 4px 15px rgba(52, 152, 219, 0.2)";
            }}
            onBlur={(e) => {
              e.target.style.borderColor = "#e0e0e0";
              e.target.style.boxShadow = "0 2px 10px rgba(0, 0, 0, 0.05)";
            }}
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
              style={{
                animation: `fadeInUp 0.5s ease ${index * 0.1}s both`,
              }}
            >
              <Card
                member={member}
                colors={getCategoryColors(member.id)}
                isExpanded={expandedCards.has(member.id)}
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
              onClick={() => {
                setSearchQuery("");
                setActiveFilter("all");
              }}
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
