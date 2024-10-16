import React from "react";
import "./navbar.scss";
import User from "../../assets/profile_image.png";

const Navbar = () => {
  return (
    <div className="navbarSection">
      <div className="navLeft">
        <h2>
          Food<span style={{ color: "tomato" }}>Hunt</span>
        </h2>
        <h5>Admin Panel</h5>
      </div>
      <div className="navRight">
        <img src={User} alt="" />
      </div>

    </div>
  );
};

export default Navbar;
