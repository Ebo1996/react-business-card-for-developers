import React, { Component } from "react";
import "../../../../style.css";

export default class Card extends Component {
  render() {
    return (
      <div
        className={`card card-${this.props.number}`}
        data-category={this.props.category}
      >
        <div className="card-header">
          <div className="avatar">
            <img src={this.props.image} alt={this.props.alt} />
          </div>
          <div className="person-info">
            <h2 className="name">{this.props.name} Chen</h2>
            <p className="position">{this.props.position}</p>
            <p className="company">{this.props.company}</p>
          </div>
        </div>
        <div className="card-body">
          <div className="info">
            <i className="fas fa-envelope"></i>
            <span className="info-content">{this.props.email}</span>
          </div>
          <div className="info">
            <i className="fas fa-phone"></i>
            <span className="info-content">{this.props.phone}</span>
          </div>
          <div className="info">
            <i className="fas fa-map-marker-alt"></i>
            <span className="info-content">{this.props.location}</span>
          </div>
          <div className="info">
            <i className="fas fa-code"></i>
            <span className="info-content">{this.props.skills.join(", ")}</span>
          </div>
        </div>
        <div className="card-footer">
          <button className="contact-btn">{this.props.contactText}</button>
          <div className="social-icons">
            <a href="#">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="#">
              <i className="fab fa-github"></i>
            </a>
            <a href="#">
              <i className="fab fa-twitter"></i>
            </a>
          </div>
        </div>
      </div>
    );
  }
}
