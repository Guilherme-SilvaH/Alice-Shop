import { FaInstagram } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import "./Bannerinsta.scss";

export default function BannerInsta() {
  return (
    <div className="banner-container">
      <section className="section-itens">
        <div className="itens-insta">
          <NavLink to="/instagram" className="nav-insta">
            <FaInstagram className="icon-insta" />
          </NavLink>
        </div>
        <p className="p-follow-insta">Siga-nos no instagram</p>
        <h3 className="title-nameInsta">
          {" "}
          <a
            className="title-nameInsta"
            href="https://www.instagram.com/byalicegaldino/"
          >
            @byalicegaldino
          </a>
        </h3>
      </section>
    </div>
  );
}
