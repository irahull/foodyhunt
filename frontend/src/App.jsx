import React from 'react';
import "./app.scss";
import Navbar from './components/navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import Order from './pages/order/Order';
import Cart from './pages/cart/Cart';
import Footer from './components/footer/Footer';
import Login from './pages/login/Login';
import Register from './pages/register/Register';

const App = () => {
  return (
    <>
    {/* <Login/> */}
    <div className='app'>
      <Navbar/>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/cart" element={<Cart/>} />
        <Route exact path="/order" element={<Order/> } />
        <Route exact path="/login" element={<Login/> } />
        <Route exact path="/register" element={<Register/> } />
      </Routes>
    </div>
      <Footer/>
      </>
  )
}

export default App;