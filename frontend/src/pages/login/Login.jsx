import React, { useContext, useState } from "react";
import "./login.scss";
import LoginImg from "/login.jpg";
import { useNavigate } from "react-router-dom";
import { FaEnvelope, FaLock } from "react-icons/fa";

const Login = () => {
  const navigate = useNavigate();

  return (
    <div className="login-section">
      <div className="login-container">
        <div className="login-left">
          <h2>Welcome Back!</h2>
          <form method="POST" className="inp">
            <div className="box email-box">
            <FaEnvelope />
              <input type="email" placeholder="Your Email" />
            </div>

            <div className="box password-box">
            <FaLock />
              <input type="password" placeholder="Password" />
            </div>
            <div className="btn">
              <button>Login</button>
            </div>
          </form>
        </div>
        <div className="login-right">
          <img src={LoginImg} alt="login Image" />
          <div className="text">
            <p onClick={() => navigate("/register")}>Create an account</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
