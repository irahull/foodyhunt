import React from "react";
import "./card.scss";
import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa6";

const Card = ({ item }) => {
  return (
    <div key={item._id} className="foodItem">
      <div className="fiImage">
        <img src={item.image} alt={item.name} />
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
