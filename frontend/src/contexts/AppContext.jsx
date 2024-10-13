import { createContext } from "react";
import { food_list } from "../assets/assets";

export const Context = createContext();

export const AppContext = ({ children }) => {
  const contextValue = {
    food_list,
  };
  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
};
