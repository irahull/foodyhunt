import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";

export const Context = createContext();

export const AppContext = ({ children }) => {
  const [cartItems, setCartItems] = useState({});

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

  useEffect(() => {
    console.log(cartItems);
  }, [cartItems]);

  const contextValue = {
    food_list,
    cartItems,
    setCartItems,
    addToCart,
    removeFromCart,
  };
  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
};
