import React from "react";
import "./menu.scss";
import { menu_list } from "../../assets/assets";

const Menu = ({ category, setCategory }) => {
  return (
    <section className="menuSection" id="menu">
      <h2>Explore our menu</h2>
      <p className="menuPara">
        Choose from a diverse menu featuring in delectable array of dishes. Our
        mission is satisfy your cravings and elavate your dining experience, one
        delicious meal at a time.
      </p>
      <div className="menuList">
        {menu_list.map((item, index) => (
          <div
            key={index}
            className="menuItem"
            onClick={() =>
              setCategory((prev) =>
                prev === item.menu_name ? "All" : item.menu_name
              )
            }
          >
            <img
              src={item.menu_image}
              alt=""
              className={category === item.menu_name ? "activeCategory" : ""}
            />
            <p>{item.menu_name}</p>
          </div>
        ))}
      </div>
      <hr />
    </section>
  );
};

export default Menu;
