import { NavLink } from "react-router-dom";
import { IoClose, IoMenu } from "react-icons/io5";
import logo from "../../assets/IMG_4852.svg";
import "./Header.scss";

const Header = () => {
  return (
    <header className="header">
      <div className="follow-insta">
        <h5>Siga-nos no Instagram @byalicegaldino</h5>
      </div>
      <nav className="nav container">
        <NavLink to="/" className="nav__logo">
          <img src={logo}></img>
        </NavLink>
        <div className={"nav__menu"} id="nav-menu">
          <ul className="nav__list">
            <li className="nav__item">
              <NavLink to="/" className="nav__link">
                HOME
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink to="/produtos" className="nav__link">
                PRODUTOS
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink to="/sobre" className="nav__link">
                SOBRE
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink to="/contato" className="nav__link">
                CONTATO
              </NavLink>
            </li>
          </ul>
          <div className="nav__close" id="nav-close">
            <IoClose />
          </div>
        </div>
        <div className="nav__toggle" id="nav-toggle">
          <IoMenu />
        </div>
      </nav>
    </header>
  );
};

export default Header;
