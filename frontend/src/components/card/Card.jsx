import React, { useContext } from "react";
import "./card.scss";
import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
import { IoMdAdd } from "react-icons/io";
import { Context } from "../../contexts/AppContext";
// import { Link } from "react-router-dom";

const Card = ({ item }) => {
  const { cartItems, addToCart, removeFromCart } = useContext(Context);
  return (
    <div key={item._id} className="foodItem">
      <div className="fiImage">
        <img src={item.image} alt={item.name} />
        {/* <Link to={`/food/${item._id}`}> <img src={item.image} alt={item.name} /></Link> */}
        {!cartItems[item._id] ? (
          <div className="fiItemAdd" onClick={() => addToCart(item._id)}>
            <IoMdAdd />
          </div>
        ) : (
          <div className="elseItem">
            <div className="fiRemove" onClick={() => removeFromCart(item._id)}>
              <FaMinus />
            </div>
            <div className="fiItem">{cartItems[item._id]}</div>
            <div className="fiAdd" onClick={() => addToCart(item._id)}>
              <IoMdAdd />
            </div>
          </div>
        )}
      </div>
      <div className="fiHeading">
        <h4>{item.name}</h4>
        <span>
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaRegStar style={{ fontSize: "16px" }} />
        </span>
      </div>
      <p>{item.description}</p>
      <p className="fiPrice">Price: {item.price} $</p>
    </div>
  );
};

export default Card;
