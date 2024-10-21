import { createContext, useEffect, useState } from "react";
import apiRequest from "../helper/apiRequest";

export const Context = createContext();

export const AppContext = ({ children }) => {
  const [cartItems, setCartItems] = useState({});
  const [token, setToken] = useState();
  const [foodList, setFoodList] = useState([]);

  const getFoodItems = async () => {
    const res = await apiRequest.get("/food/list");
    setFoodList(res.data.data);
  };

  const addToCart = async (itemId) => {
    if (!cartItems[itemId]) {
      setCartItems((prev) => ({ ...prev, [itemId]: 1 }));
    } else {
      setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    }
    if (token) {
      await apiRequest.post("/cart/add", { itemId }, { headers: { token } });
    }
  };

  const removeFromCart = async (itemId) => {
    if (cartItems[itemId]) {
      setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    }
    if (token) {
      await apiRequest.post("/cart/remove", { itemId }, { headers: { token } });
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
        let itemInfo = foodList.find((product) => product._id === item);
        total += itemInfo.price * cartItems[item];
        console.log(total);
      }
    }
    return total;
  };

  const loadCartData = async (token) => {
    const res = await apiRequest.post("/cart/get", {}, { headers: { token } });
    console.log(res);
    setCartItems(res.data.data);
  };

  useEffect(() => {
    async function loadData() {
      await getFoodItems();
      if (localStorage.getItem("token")) {
        setToken(localStorage.getItem("token"));
        await loadCartData(localStorage.getItem("token"));
      }
    }
    loadData();
  }, []);

  const contextValue = {
    cartItems,
    setCartItems,
    addToCart,
    removeFromCart,
    totalCartAmount,
    totalCartItem,
    token,
    setToken,
    foodList,
  };
  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
};
