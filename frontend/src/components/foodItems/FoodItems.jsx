import React, { useContext } from "react";
import "./foodItems.scss";
import { Context } from "../../contexts/AppContext";
import Card from "../card/Card";

const FoodItems = ({ category }) => {
  const { foodList } = useContext(Context);
  return (
    <div className="foodSection" id="foodSection">
      <h2>Food dishes near you</h2>
      <div className="foodItems">
        {foodList.map((item, index) => {
          if (category === "All" || category === item.category) {
            return <Card item={item} key={index} />;
          }
        })}
      </div>
    </div>
  );
};

export default FoodItems;
