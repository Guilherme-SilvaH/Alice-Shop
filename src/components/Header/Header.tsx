import { NavLink } from "react-router-dom";

import { FaWhatsapp, FaInstagram } from "react-icons/fa";
import logo from "../../assets/IMG_4852.svg";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Header.scss";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header">
      <div className="follow-insta">
        <h5>Siga-nos no Instagram @byalicegaldino</h5>
      </div>
      <nav className="navbar navbar-expand-lg navbar-light custom-navbar">
        <NavLink to="/" className="navbar-brand">
          <img src={logo} alt="Logo" />
        </NavLink>
        <button className="navbar-toggler" type="button" onClick={toggleMenu}>
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className={`collapse navbar-collapse ${menuOpen ? "show" : ""}`}
          id="navbarNav"
        >
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <NavLink to="/" className="nav-link">
                HOME
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/produtos" className="nav-link">
                PRODUTOS
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/sobre" className="nav-link">
                SOBRE
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/contato" className="nav-link">
                CONTATO
              </NavLink>
            </li>
          </ul>
          <ul className="navbar-nav navbar-icons">
            <li className="nav-item">
              <NavLink to="/instagram" className="nav-link">
                <FaInstagram />
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/whats" className="nav-link">
                <FaWhatsapp />
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
