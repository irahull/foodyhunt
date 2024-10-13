import React, { useState } from "react";
import "./navbar.scss";
import { assets } from "../../assets/assets";

const Navbar = () => {
  const [active, setActive] = useState("home");

  const handleNav = (e) => {
    setActive(e.target.innerHTML);
  };
  return (
    <div className="navbarWrapper">
      <h2 className="navLogo">Food<span style={{
        color:"tomato"
      }}>Hunt</span></h2>
      <ul className="navLinks">
        <li className={active === "home" ? "active" : ""} onClick={handleNav}>
          home
        </li>
        <li className={active === "menu" ? "active" : ""} onClick={handleNav}>
          menu
        </li>
        <li
          className={active === "contact" ? "active" : ""}
          onClick={handleNav}
        >
          contact
        </li>
        <li
          className={active === "privacy" ? "active" : ""}
          onClick={handleNav}
        >
          privacy
        </li>
      </ul>
      <div className="navRight">
        <img src={assets.search_icon} alt="" />
        <div className="navBtn">
          <img src={assets.bag_icon} alt="" />
        </div>
          <button>Sign In</button>
      </div>
    </div>
  );
};

export default Navbar;
