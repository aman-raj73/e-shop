import { createContext, useEffect, useState } from "react";
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
  
const getInitialCart = () =>{
  const storedCart = localStorage.getItem('cart');
  return storedCart ? JSON.parse(storedCart) : getDefaultCart();
}


  const [cartItem, setCartItem] = useState(getInitialCart);


 useEffect(() => {
  localStorage.setItem("cart", JSON.stringify(cartItem));
}, [cartItem]);

  const addToCart = (itemId) => {
    setCartItem((prev) => ({
      ...prev,
      [itemId]: prev[itemId] + 1,
    }));
  };

  const removeCartItem = (itemId) =>{
    setCartItem ((prev) =>({
    ...prev,
    [itemId]:Math.max(prev[itemId] -1,0),
    }));
  }

  const removeAllCartItem = (itemId) =>{
    setCartItem ((prev) =>({
    ...prev,
    [itemId]:0,
    }));
  }
  const getTotalCartItem = ()=>{
    let totalItem = 0;
    for(const item in cartItem){
      if(cartItem[item]>0){
        totalItem += cartItem[item]
      }
    }
    return totalItem
  }

  const getTotalCartAmount = () =>{
    let totalAmount = 0;
    for (const item in cartItem){
      if(cartItem[item]>0){
        let iteminfo = all_product.find((product) =>product.id === Number(item))
        totalAmount += iteminfo.new_price * cartItem[item];
      }
    }
    return totalAmount
  }
  const contextValue = {
    all_product,
    cartItem,
    addToCart,
    removeCartItem,
    removeAllCartItem,
    getTotalCartItem,
    getTotalCartAmount
  };

  return (
    <Shopcontext.Provider value={contextValue}>
      {props.children}
    </Shopcontext.Provider>
  );
};
