import React, { Component } from "react";
import "./Card.css"
export default class Card extends Component {
  render() {
    return (
      <div className="card card-1" data-category="development">
        <div className="card-header">
          <div className="avatar">
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80"
              alt="Michael Chen"
            />
          </div>
          <div className="person-info">
            <h2 className="name">Michael Chen</h2>
            <p className="position">Senior Developer</p>
            <p className="company">TechSolutions Inc.</p>
          </div>
        </div>
        <div className="card-body">
          <div className="info">
            <i className="fas fa-envelope"></i>
            <span className="info-content">michael.chen@techsolutions.com</span>
          </div>
          <div className="info">
            <i className="fas fa-phone"></i>
            <span className="info-content">+1 (555) 123-4567</span>
          </div>
          <div className="info">
            <i className="fas fa-map-marker-alt"></i>
            <span className="info-content">San Francisco, CA</span>
          </div>
          <div className="info">
            <i className="fas fa-code"></i>
            <span className="info-content">JavaScript, React, Node.js</span>
          </div>
        </div>
        <div className="card-footer">
          <button className="contact-btn">Contact Michael</button>
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
