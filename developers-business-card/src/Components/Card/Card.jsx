import { useState } from "react";

export default function Card({ member, colors, isExpanded, onToggleExpand }) {
  const [contactClicked, setContactClicked] = useState(false);

  const gradientStyle = {
    background: `linear-gradient(to right, ${colors[0]}, ${colors[1]})`,
    backgroundImage: `linear-gradient(to right, ${colors[0]}, ${colors[1]})`,
  };

  const handleContact = (e) => {
    e.preventDefault();
    setContactClicked(true);
    setTimeout(() => setContactClicked(false), 300);

    // Simulate contact action
    const emailLink = `mailto:${member.email}?subject=Business Inquiry&body=Hello ${member.name},`;
    window.location.href = emailLink;
  };

  const handleSocialClick = (url, e) => {
    e.preventDefault();
    if (url && !url.includes("#")) {
      window.open(url, "_blank");
    }
  };

  const cardStyle = {
    transform: isExpanded ? "translateY(-10px) scale(1.02)" : "translateY(0)",
    opacity: 1,
    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
  };

  const buttonStyle = {
    ...gradientStyle,
    transform: contactClicked ? "scale(0.95)" : "scale(1)",
    transition: "all 0.2s ease",
  };

  const socialLinkStyle = {
    ...gradientStyle,
    transform: "scale(1)",
    transition: "all 0.2s ease",
    textDecoration: "none",
    width: "36px",
    height: "36px",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
    fontSize: "1rem",
    cursor: "pointer",
  };

  return (
    <div
      className={`card card-${member.id}`}
      data-category={member.category}
      style={cardStyle}
      onClick={() => onToggleExpand(member.id)}
    >
      <div className="card-header">
        <div
          className="avatar"
          style={{
            transform: isExpanded ? "scale(1.1)" : "scale(1)",
            transition: "transform 0.3s ease",
          }}
        >
          <img src={member.image} alt={member.alt} />
        </div>
        <div className="person-info">
          <h2 className="name">{member.name}</h2>
          <p className="position">{member.position}</p>
          <p className="company">{member.company}</p>
        </div>
      </div>
      <div
        className="card-body"
        style={{
          maxHeight: isExpanded ? "500px" : "200px",
          transition: "max-height 0.4s ease",
          overflow: "hidden",
        }}
      >
        <div className="info">
          <i className="fas fa-envelope"></i>
          <span className="info-content">{member.email}</span>
        </div>
        <div className="info">
          <i className="fas fa-phone"></i>
          <span className="info-content">{member.phone}</span>
        </div>
        <div className="info">
          <i className="fas fa-map-marker-alt"></i>
          <span className="info-content">{member.location}</span>
        </div>
        <div className="info">
          <i className="fas fa-code"></i>
          <span className="info-content">{member.skills.join(", ")}</span>
        </div>
        {isExpanded && (
          <div style={{ animation: "fadeIn 0.3s ease", marginTop: "15px" }}>
            <div className="info">
              <i className="fas fa-building"></i>
              <span className="info-content">Category: {member.category}</span>
            </div>
          </div>
        )}
      </div>
      <div className="card-footer">
        <button
          className="contact-btn"
          onClick={handleContact}
          style={buttonStyle}
        >
          Contact {member.name.split(" ")[0]}
        </button>
        <div className="social-icons">
          <a
            href={member.linkedin}
            onClick={(e) => handleSocialClick(member.linkedin, e)}
            className="social-link"
            style={socialLinkStyle}
          >
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a
            href={member.github}
            onClick={(e) => handleSocialClick(member.github, e)}
            className="social-link"
            style={socialLinkStyle}
          >
            <i className="fab fa-github"></i>
          </a>
          <a
            href={member.twitter}
            onClick={(e) => handleSocialClick(member.twitter, e)}
            className="social-link"
            style={socialLinkStyle}
          >
            <i className="fab fa-twitter"></i>
          </a>
        </div>
      </div>
    </div>
  );
}
