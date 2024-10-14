import React, { useContext } from "react";
import "./cart.scss";
import { Context } from "../../contexts/AppContext";

const Cart = () => {
  const { cartItems, food_list, removeFromCart } = useContext(Context);
  console.log(cartItems);
  console.log(food_list);
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
              <div>
                <div className="cartTitle cartItem" key={i}>
                  <img src={item.image} alt="" />
                  <p>{item.name}</p>
                  <p>$ {item.price}</p>
                  <p>{cartItems[item._id]}</p>
                  <p>$ {item.price * cartItems[item._id]} </p>
                  <p className="removeCartItem" onClick={()=> removeFromCart(item._id)}>X</p>
                </div>
                <hr />
              </div>
            );
          }
        })}
      </div>
    </section>
  );
};

export default Cart;
