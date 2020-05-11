import React from "react";

import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="site-footer center-content-mobile">
      <div className="container">
        <div className="site-footer-inner">
          <div className="footer-top space-between text-xxs">
            <div className="brand">
              <Link to="">
                <h4>Cari Kursus IT</h4>
              </Link>
            </div>
            <div className="footer-social">
              <ul className="list-reset">
                <li>
                  <Link to="#">
                    labalabaelit@gmail.com
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom space-between text-xxs invert-order-desktop">
            <nav className="footer-nav">
              <ul className="list-reset">
                <li>
                  <Link to="#">Tentang Kami</Link>
                </li>
                <li>
                  <Link to="#">Semantik Web</Link>
                </li>
              </ul>
            </nav>
            <div className="footer-copyright">
              &copy; 2020 Cari Kursus IT
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
