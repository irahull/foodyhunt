import React, { useState, Suspense, lazy } from "react";
import Header from "../../components/header/Header";
import Menu from "../../components/menu/Menu";
const FoodItems = lazy(() => import("../../components/foodItems/FoodItems"));

const Home = () => {
  const [category, setCategory] = useState("All");
  return (
    <section className="homeSection">
      <Header />
      <Menu category={category} setCategory={setCategory} />
      <Suspense
        fallback={
          <div>
            Ah, the free server life—taking its time like it's on a holiday!
          </div>
        }
      >
        <FoodItems category={category} setCategory={setCategory} />
      </Suspense>
    </section>
  );
};

export default Home;
