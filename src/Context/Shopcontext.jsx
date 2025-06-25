import { createContext, useState } from "react";
import all_product from "../asset/all_product";

export const Shopcontext = createContext(null);

// ✅ Corrected getDefaultCart function
const getDefaultCart = () => {
  let cart = {};
  all_product.forEach((product) => {
    cart[product.id] = 0; // Removed the extra text
  });
  return cart;
};

export const ShopcontextProvider = (props) => {
  const [cartItem, setCartItem] = useState(getDefaultCart);

  const addToCart = (itemId) => {
    setCartItem((prev) => ({
      ...prev,
      [itemId]: prev[itemId] + 1,
    }));
  };

  const contextValue = {
    all_product,
    cartItem,
    addToCart,
  };

  return (
    <Shopcontext.Provider value={contextValue}>
      {props.children}
    </Shopcontext.Provider>
  );
};
