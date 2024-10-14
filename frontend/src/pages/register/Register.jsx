import React, { useState } from "react";
import "./register.scss";
import RegisterImg from "/register.jpg";
import { useNavigate } from "react-router-dom";


import { FaUser , FaPhoneAlt, FaLock, FaEnvelope} from "react-icons/fa";


const Register = () => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    phone: "",
    role: "",
    password: "",
    cpassword: "",
  });

  const navigate = useNavigate();

  return (
    <div className="register-section">
      <div className="register-container">
        <div className="register-left">
          <h2>Sign Up</h2>
          <form method="POST" className="inp">
            <div className="box name-box">
            <FaUser />
              <input
                type="text"
                placeholder="Your Name"
                autoComplete="off"
                name="name"
                value={userData.name}
              />
            </div>

            <div className="box email-box">
            <FaEnvelope />
              <input
                type="email"
                placeholder="Your Email"
                autoComplete="off"
                name="email"
                value={userData.email}
              />
            </div>

            <div className="box number-box">
            <FaPhoneAlt />
              <input
                type="number"
                placeholder="Mobile Number"
                autoComplete="off"
                name="phone"
                value={userData.phone}
              />
            </div>

            <div className="box password-box">
            <FaLock />
              <input
                type="password"
                placeholder="Password"
                autoComplete="off"
                name="password"
                value={userData.password}
              />
            </div>

            <div className="btn">
              <button>Register</button>
            </div>
          </form>
        </div>
        <div className="register-right">
          <img src={RegisterImg} alt="Register Image" />
          <div className="text">
            <p onClick={() => navigate("/login")}>I am already register</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
