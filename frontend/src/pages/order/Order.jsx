import React, { useContext, useState } from "react";
import "./order.scss";
import { Context } from "../../contexts/AppContext";
import apiRequest from "../../helper/apiRequest";

const Orders = () => {
  const [orderData, setOrderData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    city: "",
    state: "",
    zipcode: "",
    country: "",
    phone: "",
  });

  const { totalCartAmount, foodList, token, cartItems } = useContext(Context);

  const handleChange = (e) => {
    setOrderData((data) => ({ ...data, [e.target.name]: e.target.value }));
  };

  const placeOrder = async (e) => {
    e.preventDefault();
    let orderItems = [];
    foodList.map((item) => {
      if (cartItems[item._id] > 0) {
        let infoItem = item;
        infoItem["quantity"] = cartItems[item._id];
        orderItems.push(infoItem);
      }
    });

    let finalData = {
      address: orderData,
      items: orderItems,
      amount: totalCartAmount() + 2,
    };

    let res = apiRequest.post("/order/place", finalData, {
      headers: { token },
    });

    console.log(res);
  };

  return (
    <section className="orderSection">
      <form  className="orderLeft">
        <h3>Delivery Information</h3>
        <div className="orderInp">
          <div className="fullName multipleInput">
            <input
              type="text"
              placeholder="First Name"
              className="singleInput"
              required
              name="firstName"
              value={orderData.firstName}
              onChange={handleChange}
            />
            <input
              type="text"
              placeholder="Last Name"
              className="singleInput"
              required
              name="lastName"
              value={orderData.lastName}
              onChange={handleChange}
            />
          </div>
          <input
            type="text"
            placeholder="Email"
            className="singleInput"
            required
            name="email"
            value={orderData.email}
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Street Address"
            className="singleInput"
            required
            name="street"
            value={orderData.street}
            onChange={handleChange}
          />
          <div className="cityState multipleInput">
            <input
              type="text"
              placeholder="City"
              className="singleInput"
              required
              name="city"
              value={orderData.city}
              onChange={handleChange}
            />
            <input
              type="text"
              placeholder="State"
              className="singleInput"
              required
              name="state"
              value={orderData.state}
              onChange={handleChange}
            />
          </div>
          <div className="zipcode&Country multipleInput">
            <input
              type="text"
              placeholder="Zipcode"
              className="singleInput"
              required
              name="zipcode"
              value={orderData.zipcode}
              onChange={handleChange}
            />
            <input
              type="text"
              placeholder="Country"
              className="singleInput"
              required
              name="country"
              value={orderData.country}
              onChange={handleChange}
            />
          </div>
          <input
            type="text"
            placeholder="Phone"
            required
            name="phone"
            value={orderData.phone}
            onChange={handleChange}
          />
        </div>
      </form>
      <div className="orderRight">
        <h3>Cart Totals</h3>
        <div className="subTotal">
          <p>SubTotal</p>
          <p>$ {totalCartAmount()}</p>
        </div>
        <hr />
        <div className="deliveryFee">
          <p>Delivery Fee</p>
          <p>${totalCartAmount() === 0 ? 0 : 2} </p>
        </div>
        <hr />
        <div className="finalTotal">
          <b>
            <p>Total</p>
          </b>
          <b>
            <p>$ {totalCartAmount() === 0 ? 0 : totalCartAmount() + 2}</p>
          </b>
        </div>
        <hr />
        <div className="paymentBtn" onClick={placeOrder}>
          Proceed To Payment
        </div>
      </div>
    </section>
  );
};

export default Orders;
