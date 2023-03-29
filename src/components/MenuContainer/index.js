import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class MenuContainer extends Component {
  render() {
    const { pathname } = window.location;
    return (
      <div className="menu">
        <div className="Logo">
          <img
            className="Avatar"
            src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            alt="avatar"
          />
        </div>
        <Link to="/about" className={pathname === "/about" ? "active" : ""}>
          About
        </Link>
        <Link
          to="/experiance"
          className={pathname === "/experiance" ? "active" : ""}
        >
          Experiance
        </Link>
        <Link
          to="/educations"
          className={pathname === "/educations" ? "active" : ""}
        >
          Educations
        </Link>
        <Link to="/skills" className={pathname === "/skills" ? "active" : ""}>
          Skills
        </Link>
        <Link
          to="/interest"
          className={pathname === "/interest" ? "active" : ""}
        >
          Interests
        </Link>
        <Link to="/awards" className={pathname === "/awards" ? "active" : ""}>
          Awards
        </Link>
      </div>
    );
  }
}
