import React, { useState } from "react";
import "./Navbar.css";
import logo from "../images/logo.png";
import { Link } from "react-router-dom";
//import { FaBars, FaTimes} from 'react-icons/fa'
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  return (
    <>
      <nav>
        <div className="nav-bar">
          <div className="logo-container">
            <Link to="/" className="navbar-logo">
              <img src={logo} alt="logo" />
            </Link>
          </div>
          <div
            className={showLinks ? "mobile-menu-container" : "menu-container"}
          >
            <ul>
              <li className="nav-item">
                <Link to="/" className="nav-links">
                  Overview
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/wordpay" className="nav-links">
                  Why WordPay
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/tech" className="nav-links">
                  Tech Specs
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/create-account" className="nav-links">
                  <button className="create-acc-btn">Create account</button>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div onClick={() => setShowLinks(!showLinks)}>
          <GiHamburgerMenu size={28} className="menu-btn" />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
