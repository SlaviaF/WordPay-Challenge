import React from 'react'
import "./Footer.css"
const Footer = () => {
    return (
      <div className="footer-container container-fluid">
        <div className="footer-contact">
          <h6>Sales | Support | Developers | Resellers &#38; partners</h6>
          <p>© WordPay 2021</p>
          <small>Holmbladsgade 133 - 2300 København</small>
         <div className="horizontal-line"></div>
        </div>
        <div className="footer-terms">
          <ul>
            <li>Terms</li>
            <li>Privacy</li>
          </ul>
        </div>
      </div>
    );
}

export default Footer
