import React, { useContext } from "react";
import "./cart.scss";
import { Context } from "../../contexts/AppContext";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const navigate = useNavigate();

  const { cartItems, food_list, removeFromCart, totalCartAmount } =
    useContext(Context);
    console.log(totalCartAmount());

  return (
    <section className="cartSection">
      <div className="cartBox">
        <div className="cartTitle">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item, i) => {
          if (cartItems[item._id] > 0) {
            return (
              <div key={i}>
                <div className="cartTitle cartItem">
                  <img src={item.image} alt="" />
                  <p>{item.name}</p>
                  <p>$ {item.price}</p>
                  <p>{cartItems[item._id]}</p>
                  <p>$ {item.price * cartItems[item._id]} </p>
                  <p
                    className="removeCartItem"
                    onClick={() => removeFromCart(item._id)}
                  >
                    X
                  </p>
                </div>
                <hr />
              </div>
            );
          }
        })}
      </div>
      <div className="cartCheckout">
        <div className="cartTotal">
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
          <div className="checkoutBtn" onClick={() => navigate("/order")}>
            Proceed To Checkout
          </div>
        </div>
        <div className="cartCupon">
          <p>If you have a promo code, Submit here!</p>
          <div className="cupon">
            <input type="text" placeholder="promocode" />
            <button>Submit</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cart;
