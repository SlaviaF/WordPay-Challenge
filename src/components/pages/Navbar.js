import React from 'react';
import './Navbar.css'
import logo from '../images/logo.png'
import { Link } from 'react-router-dom';
//import { FaBars, FaTimes} from 'react-icons/fa'

const Navbar = () => {

    return (
      <>
        <nav className="navbar">
          <div className="logo-container">
            <Link to="/" className="navbar-logo">
              <img src={logo} alt="logo" />
            </Link>
          </div>
          <div className="menu-container">
            <ul>
              <li className='nav-item'>
                <Link to="/" className="nav-links">
                  Overview
                </Link>
              </li>
              <li className='nav-item'>
                <Link to="/wordpay" className="nav-links">
                  Why WordPay
                </Link>
              </li>
              <li className='nav-item'>
                <Link to="/tech" className="nav-links">
                  Tech Specs
                </Link>
              </li>
              <li className='nav-item'>
              <Link to="/create-account" className="nav-links">
                  <button className="create-acc-btn">Create account</button>
              </Link>
              </li>
            </ul>
            </div>
        </nav>
      </>
    );
}

export default Navbar