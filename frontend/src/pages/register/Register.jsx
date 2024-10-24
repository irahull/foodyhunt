import React, { useContext, useState } from "react";
import "./register.scss";
import RegisterImg from "/register.jpg";
import { useNavigate } from "react-router-dom";

import { FaUser, FaPhoneAlt, FaLock, FaEnvelope } from "react-icons/fa";
import apiRequest from "../../helper/apiRequest";
import { Context } from "../../contexts/AppContext";
import { toast } from "react-toastify";

const Register = () => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const { setToken } = useContext(Context);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setUserData((data) => ({ ...data, [e.target.name]: e.target.value }));
    console.log(userData);
  };

  const handleRegister = async (e) => {
    e.preventDefault;
    const res = await apiRequest.post("/auth/register", userData);
    console.log(res);
    if (res.data.success) {
      setToken(res.data.token);
      localStorage.setItem("token", res.data.token);
      toast.success("User registration successfull");
      navigate("/login");
    }
  };

  return (
    <div className="register-section">
      <div className="register-container">
        <div className="register-left">
          <h2>Sign Up</h2>
          <div className="inp">
            <div className="box name-box">
              <FaUser />
              <input
                type="text"
                placeholder="Your Name"
                autoComplete="off"
                name="name"
                value={userData.name}
                onChange={handleChange}
              />
            </div>

            <div className="box email-box">
              <FaEnvelope />
              <input
                type="email"
                placeholder="Your Email"
                autoComplete="off"
                name="email"
                onChange={handleChange}
                value={userData.email}
              />
            </div>

            {/* <div className="box number-box">
            <FaPhoneAlt />
              <input
                type="number"
                placeholder="Mobile Number"
                autoComplete="off"
                name="phone"
                value={userData.phone}
              />
            </div> */}

            <div className="box password-box">
              <FaLock />
              <input
                type="password"
                placeholder="Password"
                autoComplete="off"
                name="password"
                onChange={handleChange}
                value={userData.password}
              />
            </div>

            <div className="btn">
              <button onClick={handleRegister}>Register</button>
            </div>
          </div>
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
