import React from "react";
import { Link } from "react-router-dom";
import Button from "elements/Button";

export default function Header(props) {
  return (
    <header className="site-header">
      <div className="container">
        <div className="site-header-inner">
          <div className="brand">
            <h1 className="m-0">
              <Link to="/">
                <h2>Cari Kursus IT</h2>
              </Link>
            </h1>
          </div>
          <div id="header-nav" className="header-nav">
            <div className="header-nav-inner">
              <ul className="list-reset text-xxs header-nav-right">
                <li>
                  <Link to="#">Beranda</Link>
                </li>
                <li>
                  <Link to="#">Semua Kelas</Link>
                </li>
                <li>
                  <Link to="#">Penyedia Kursus</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
