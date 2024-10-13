import React from 'react';
import "./app.scss";
import Navbar from './components/navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import Order from './pages/order/Order';
import Cart from './pages/cart/Cart';

const App = () => {
  return (
    <div className='app'>
      <Navbar/>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/cart" element={<Cart/>} />
        <Route exact path="/order" element={<Order/> } />
      </Routes>
    </div>
  )
}

export default App;