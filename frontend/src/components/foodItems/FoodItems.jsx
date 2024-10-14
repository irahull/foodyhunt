import React, { useContext } from "react";
import "./foodItems.scss";
import { Context } from "../../contexts/AppContext";
import Card from "../card/Card";

const FoodItems = ({ category }) => {
  const { food_list } = useContext(Context);
  return (
    <div className="foodSection" id="foodSection">
      <h2>Food dishes near you</h2>
      <div className="foodItems">
        {food_list.map((item, index) => {
          if (category === "All" || category === item.category) {
            return <Card item={item} key={index} />;
          }
        })}
      </div>
    </div>
  );
};

export default FoodItems;
