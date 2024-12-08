import React, { useState } from "react";
import { assets } from "../../assets/assets";
import "./navbar.css";
import { Link } from "react-router-dom";

const Navbar = ({ setShowLogin }) => {
  const [menu, setmenu] = useState("home");
  return (
    <div className="navBar">
      <Link to="/">
        <img src={assets.logo} alt="title" className="logo" />
      </Link>
      <div className="navMenu">
        <ul>
          <Link
            to="/"
            className={menu === "home" ? "active" : ""}
            onClick={() => setmenu("home")}
          >
            home
          </Link>
          <a
            href="#exploreMenu"
            className={menu === "menu" ? "active" : ""}
            onClick={() => setmenu("menu")}
          >
            menu
          </a>
          <a
            href="#app-download"
            className={menu === "mobile-app" ? "active" : ""}
            onClick={() => setmenu("mobile-app")}
          >
            mobile-app
          </a>
          <a
            href="#footer"
            className={menu === "contact-us" ? "active" : ""}
            onClick={() => setmenu("contact-us")}
          >
            contact us
          </a>
        </ul>
      </div>
      <div className="navRight">
        <img src={assets.search_icon} alt="search" />
        <div className="navbar-search-icon">
          <Link to="/cart">
            <img src={assets.basket_icon} alt="cart" />
          </Link>
          <div className="dot"></div>
        </div>
        <button onClick={() => setShowLogin(true)}>sign in</button>
      </div>
    </div>
  );
};

export default Navbar;
