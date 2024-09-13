import React from "react";
import "./mobileNavbar.css";
import logo from "../../../assets/bg-web.png";
import { NavLink } from "react-router-dom";
const mobileNavbar = ({ isOpen, toggleMenu }) => {
  return (
    <>
      <div
        className={`mobile-menu ${isOpen ? "active" : ""}`}
        onClick={toggleMenu}
      >
        <div className="mobile-menu-container">
          <div className="nav-logo">
            <img src={logo} alt="Logo" />
          </div>
          <ul className="menu-header">
            <li>
              <NavLink to="/Collections">Collections</NavLink>
            </li>
            <li>
              <NavLink to="/Top">Top</NavLink>
            </li>
            <li>
              <NavLink to="/Bottom">Bottom</NavLink>
            </li>
            <li>
              <NavLink to="/Acs">Accessories</NavLink>
            </li>
            <li>
              <NavLink to="/Outerwear">Outerwear</NavLink>
            </li>
            <li>
              <NavLink to="/Handbag">Handbag</NavLink>
            </li>
            <li>
              <NavLink to="/Sale">Sale</NavLink>
            </li>
          </ul>
          <div className="login-signup-member">
            <div>
              <NavLink to="/Login">Login</NavLink>
              <NavLink to="/Signup">SignUp</NavLink>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default mobileNavbar;
