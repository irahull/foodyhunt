import React, { useState } from "react";
import Header from "../../components/header/Header";
import Menu from "../../components/menu/Menu";
import FoodItems from "../../components/foodItems/FoodItems";

const Home = () => {
  const [category, setCategory] = useState("All");
  return (
    <section className="homeSection">
      <Header />
      <Menu category={category} setCategory={setCategory} />
      <FoodItems category={category} setCategory={setCategory} />
      
    </section>
  );
};

export default Home;
