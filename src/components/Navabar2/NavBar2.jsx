import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import "./NavBar2.scss";
import butger from "../../assets/burger.png";
const NavBar2 = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = (e) => {
    e.preventDefault();
    setIsExpanded(!isExpanded);
  };

  return (
    <header className="header">
      <div className="logo">
        <Link to="/">
          <p>React Responsive Navigation</p>
          <em>
            <div className="letterhead">
              <span className="name">kentorry</span>
              <span className="gray">.io</span>
            </div>
          </em>
        </Link>
      </div>

      <nav className="nav">
        <div>
          <img
            src={butger}
            alt="burger"
            className="basdasdasg"
            onClick={handleToggle}
          />
        </div>
        <ul className={`collapsed ${isExpanded ? "is-expanded" : ""}`}>
          <NavLink activeClassName="active" to="/">
            <li>home</li>
          </NavLink>
          <NavLink activeClassName="active" to="/about">
            <li>about</li>
          </NavLink>
          <NavLink activeClassName="active" to="/contact">
            <li>contact</li>
          </NavLink>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar2;
