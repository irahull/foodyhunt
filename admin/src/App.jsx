import React from "react";
import "./app.scss";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";
import AddItem from "./pages/addItem/AddItem";
import ListItem from "./pages/listItem/ListItem";
import Orders from "./pages/order/Orders";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <section className="app">
      <Navbar />
      <ToastContainer />
      <hr />
      <div className="appContent">
        <Sidebar />
        <Routes>
        <Route exact path="/" element={<AddItem />} />
        <Route exact path="/list" element={<ListItem />} />
        <Route exact path="/orders" element={<Orders />} />
        </Routes>
      </div>
    </section>
  );
};

export default App;
