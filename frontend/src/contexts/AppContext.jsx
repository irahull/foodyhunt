import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";

export const Context = createContext();

export const AppContext = ({ children }) => {
  const [cartItems, setCartItems] = useState({});
  const [token, setToken] = useState();

  const addToCart = (id) => {
    if (!cartItems[id]) {
      setCartItems((prev) => ({ ...prev, [id]: 1 }));
    } else {
      setCartItems((prev) => ({ ...prev, [id]: prev[id] + 1 }));
    }
  };

  const removeFromCart = (id) => {
    if (cartItems[id]) {
      setCartItems((prev) => ({ ...prev, [id]: prev[id] - 1 }));
    }
  };

  const totalCartItem = () => {
    let items = 0;
    for (const item in cartItems) {
      items += item.length;
    }
    return items;
  };

  const totalCartAmount = () => {
    let total = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = food_list.find((product) => product._id === item);
        total += itemInfo.price * cartItems[item];
        console.log(total);
      }
    }
    return total;
  };

  useEffect(() => {
    if (localStorage.getItem("token")) {
      setToken(localStorage.getItem("token"));
    }
  }, []);

  const contextValue = {
    food_list,
    cartItems,
    setCartItems,
    addToCart,
    removeFromCart,
    totalCartAmount,
    totalCartItem,
    token,
    setToken,
  };
  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
};
