import React from "react";
import "./app.scss";
import Navbar from "./components/navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Order from "./pages/order/Order";
import Cart from "./pages/cart/Cart";
import Footer from "./components/footer/Footer";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import SingleFoodItem from "./components/singleFoodItem/SingleFoodItem";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Profile from "./pages/profile/Profile";

const App = () => {
  return (
    <>
      {/* <Login/> */}
      <div className="app">
        <Navbar />
        <ToastContainer/>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/cart" element={<Cart />} />
          <Route exact path="/order" element={<Order />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/profile" element={<Profile />} />
          {/* <Route exact path="/food/:id" element={<SingleFoodItem />} /> */}
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;
