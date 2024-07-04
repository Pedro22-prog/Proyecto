import { createContext,  useState } from "react";
import { food_list } from "../assets/assets";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  const [cartItems, setCartItems] = useState({});

  const addToCart = (itemId) => {
    if (!itemId) {
      console.error("Invalid itemId passed to addToCart:", itemId);
      return;
    }
    setCartItems((prev) => {
      const newCartItems = { ...prev };
      newCartItems[itemId] = (newCartItems[itemId] || 0) + 1;
      console.log("Added to cart:", newCartItems);
      return newCartItems;
    });
  }

  const removeFromCart = (itemId) => {
    if (!itemId) {
      console.error("Invalid itemId passed to removeFromCart:", itemId);
      return;
    }
    setCartItems((prev) => {
      const newCartItems = { ...prev };
      if (newCartItems[itemId] > 0) {
        newCartItems[itemId] -= 1;
      }
      if (newCartItems[itemId] === 0) {
        delete newCartItems[itemId];
      }
      console.log("Removed from cart:", newCartItems);
      return newCartItems;
    });
  }

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const itemId in cartItems) {
      const itemInfo = food_list.find((product) => product._id === itemId);
      if (itemInfo) {
        totalAmount += itemInfo.price * cartItems[itemId];
      }
    }
    console.log("Total Cart Amount:", totalAmount);
    return totalAmount;
  };

  const contextValue = {
    food_list,
    cartItems,
    setCartItems,
    addToCart,
    removeFromCart,
    getTotalCartAmount,
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;

	
