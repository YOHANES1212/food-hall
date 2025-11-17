import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  const [cartItems, setCartItems] = useState({});

  const addToCart = (itemId) => {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: prev[itemId] ? prev[itemId] + 1 : 1
    }));
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => {
      if (!prev[itemId]) return prev; // jangan ubah kalau tidak ada item
      const updated = { ...prev };
      updated[itemId] -= 1;
      if (updated[itemId] <= 0) delete updated[itemId];
      return updated;
    });
  };

  const getTotalCartAmount = () => {
    let totalAmount = 0
    for(const item in cartItems){
        if (cartItems[item]>0) {
          let itemInfo = food_list.find((product)=>product._id === item);
          totalAmount += itemInfo.price* cartItems[item];
        }
    }
    return totalAmount;
  }

  const contextValue = {
    food_list,
    cartItems,
    setCartItems,
    addToCart,
    removeFromCart,
    getTotalCartAmount
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
