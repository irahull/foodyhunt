import React from "react";
import "./footer.scss";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footerSection" id="footer">
      <div className="footerWrapper">
        <div className="footerLeft">
          <h3>
            Food<span>Hunt</span>{" "}
          </h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Necessitatibus eligendi, voluptate porro quam Necessitatibus
            eligendi, voluptate porro quam
          </p>
        </div>
        <div className="footerCenter">
          <h4>IMPORTANT</h4>
          <ul className="links">
            <li>Home</li>
            <li>About Us</li>
            <li>Contact</li>
            <li>Delivery</li>
          </ul>
        </div>
        <div className="footerRight">
          <h4>GET IN TOUCH</h4>
          <p className="phoneNumber">+1232343222</p>
          <p className="email">dummy@gmail.com</p>
          <div className="socialIcons">
            <FaFacebookF />
            <FaInstagram />
            <FaTwitter />
            <FaLinkedinIn />
          </div>
        </div>
      </div>
      <hr />
      <p className="copyrightsText">Copyright @ 2024 FoodHunt</p>
    </footer>
  );
};

export default Footer;
