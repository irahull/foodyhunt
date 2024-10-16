import React from "react";
import "./singleFoodItem.scss";
import { useParams } from "react-router-dom";
import { food_list } from "../../assets/assets";

const singleFoodItem = () => {
  const { id } = useParams();

  const foodItem = food_list.filter((item) => item._id === id);

  return (
    <div className="singleFoodItem">
      <div className="sfiLeft">
        {foodItem.map((item) => (
          <div key={item._id}>
            <h2>{item.name}</h2>
            <img src={item.image} alt={item.name} />
            <p>{item.description}</p>
            <p>$ {item.price}</p>
          </div>
        ))}
      </div>
      <div className="sfiRight">

      </div>
    </div>
  );
};

export default singleFoodItem;
