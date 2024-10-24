import React, { useContext, useState } from "react";
import "./login.scss";
import LoginImg from "/login.jpg";
import { useNavigate } from "react-router-dom";
import { FaEnvelope, FaLock } from "react-icons/fa";
import { toast } from "react-toastify";
import apiRequest from "../../helper/apiRequest";
import { Context } from "../../contexts/AppContext";

const Login = () => {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  
  const { setToken, updateUser } = useContext(Context);

  const handleChange = (e) => {
    setUserData((data) => ({ ...data, [e.target.name]: e.target.value }));
    console.log(userData);
  };

  const handleLogin = async (e) => {
    e.preventDefault;
    const res = await apiRequest.post("/auth/login", userData);
    if (res.data.success) {
      updateUser(res.data.userData);
      setToken(res.data.token);
      localStorage.setItem("token", res.data.token);
      toast.success("User login successfull");
      navigate("/");
    }
  };

  return (
    <div className="login-section">
      <div className="login-container">
        <div className="login-left">
          <h2>Welcome Back!</h2>
          <div  className="inp">
            <div className="box email-box">
              <FaEnvelope />
              <input
                type="email"
                placeholder="Your Email"
                name="email"
                value={userData.email}
                onChange={handleChange}
              />
            </div>

            <div className="box password-box">
              <FaLock />
              <input
                type="password"
                placeholder="Password"
                name="password"
                value={userData.password}
                onChange={handleChange}
              />
            </div>
            <div className="btn">
              <button onClick={handleLogin}>Login</button>
            </div>
          </div>
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
