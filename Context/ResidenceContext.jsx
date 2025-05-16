import React, { createContext, useState } from "react";
import all_design from "../Components/Assets/all_design";


export const ResidenceContext = createContext(null);
     const getDefaultCart = ()=>{
        let cart = {};
        for (let index = 0; index < all_design.length+1; index++) {
          cart[index] = 0;
        }
        return cart;
     }
const ResidenceContextProvider = (props) => {
     const [cartItems,setCartItems] = useState(getDefaultCart());
    
   
   const addToCart = (itemId) =>{
      setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
      console.log(cartItems);
   }
   const removeFromCart = (itemId) =>{
      setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
   }
   const getTotalCartAmount = () => {
      let totalAmount = 0;
      for(const item in cartItems)
      {
         if(cartItems[item]>0)
         {
            let itemInfo = all_design.find((product)=>product.id===Number(item))
            if (itemInfo) {
            totalAmount += itemInfo.new_price* cartItems[item];
         }
      }
   }
 return totalAmount;
};
 const getTotalCartItems = () =>{
    let totalItem = 0;
    for(const item in cartItems)
    {
      if(cartItems[item]>0)
      {
         totalItem+= cartItems[item];
      }
    }
 return totalItem;
  
 
};
   const contextValue = {getTotalCartItems,getTotalCartAmount,all_design,cartItems,addToCart,removeFromCart,};
    return(
        <ResidenceContext.Provider value={contextValue}>
            {props.children}
        </ResidenceContext.Provider>
    );
};

export default ResidenceContextProvider;
