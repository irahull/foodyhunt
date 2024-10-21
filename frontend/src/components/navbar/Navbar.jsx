import React, { useContext, useState } from "react";
import "./navbar.scss";
import { assets } from "../../assets/assets";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../../contexts/AppContext";
import { FaRegDotCircle } from "react-icons/fa";


const Navbar = () => {
  const [active, setActive] = useState("home");

  const navigate = useNavigate("/");

  const { totalCartItem, token } = useContext(Context);

  const handleNav = (e) => {
    setActive(e.target.innerHTML);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    setToken("");
    navigate("/");
  };
  return (
    <div className="navbarWrapper">
      <h2 className="navLogo" onClick={() => navigate("/")}>
        Food
        <span
          style={{
            color: "tomato",
          }}
        >
          Hunt
        </span>
      </h2>
      <ul className="navLinks">
        <Link
          to="/"
          className={active === "home" ? "active" : ""}
          onClick={handleNav}
        >
          home
        </Link>
        <a
          href="#menu"
          className={active === "menu" ? "active" : ""}
          onClick={handleNav}
        >
          menu
        </a>
        <a
          href="#footer"
          className={active === "mobile app" ? "active" : ""}
          onClick={handleNav}
        >
          mobile app
        </a>
        <a
          href="#footer"
          className={active === "contact" ? "active" : ""}
          onClick={handleNav}
        >
          contact
        </a>
      </ul>
      <div className="navRight">
        <img src={assets.search_icon} alt="" />
        <div className="navBtn">
          <Link to="/cart">
            {" "}
            <img src={assets.bag_icon} alt="" />
          </Link>
          {totalCartItem() > 0 ? (
            <span className="cartProduct">
              {/* {totalCartItem()} */}
              <FaRegDotCircle />
        
            </span>
          ) : (
            ""
          )}
        </div>
        {token ? (
          <div className="navRight">
            <Link to ="/profile" className="user">
              Profile
            </Link>
          </div>
        ) : (
          <>
            <Link to="/login">
              <button>Login</button>
            </Link>
            <Link to="/register">
              <button>Register</button>
            </Link>{" "}
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
