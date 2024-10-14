import React, { useContext } from "react";
import "./order.scss";
import { Context } from "../../contexts/AppContext";

const Orders = () => {
  const { totalCartAmount } = useContext(Context);
  return (
    <section className="orderSection">
      <div className="orderLeft">
        <h3>Delivery Information</h3>
        <div className="orderInp">
          <div className="fullName multipleInput">
            <input
              type="text"
              placeholder="First Name"
              className="singleInput"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="singleInput"
            />
          </div>
          <input type="text" placeholder="Email" className="singleInput" />
          <input
            type="text"
            placeholder="Street Address"
            className="singleInput"
          />
          <div className="cityState multipleInput">
            <input type="text" placeholder="City" className="singleInput" />
            <input type="text" placeholder="State" className="singleInput" />
          </div>
          <input type="text" placeholder="Phone" />
        </div>
      </div>
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
        <div className="paymentBtn" onClick={() => navigate("/order")}>
          Proceed To Payment
        </div>
      </div>
    </section>
  );
};

export default Orders;
