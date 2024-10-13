import React from "react";
import "./header.scss";

const Header = () => {
  return (
    <section className="headerSection">
     <div className="headerContent">
     <div className="headerHeading">Order your favourite food here</div>
      <p className="headerPara">
        Choose from a diverse menu featuring a delectable array of dishes
        crafted with the finest ingredients and culinary expertise. Our mission
        is to satisfy your cravings and elevate your dining experience, one
        delicious meal at a time.
      </p>
      <button className="headerBtn">View More</button>
     </div>
    </section>
  );
};

export default Header;
