"use client";

import { Product } from "@/types/products";
import { createContext, useEffect, useState } from "react";

type Props = {
  children: JSX.Element;
};

type CartContextType = {
  cart: Map<number,number>;
  addItem: (key: number, value: number) => void;
  removeItem: (key: number) => void;
  clearAll: () => void;

};

export const CartContext = createContext<CartContextType>({
  cart: new Map(),
  addItem: (key: number, value: number) => {},
  removeItem: (key: number) => {},
  clearAll: () => {},
});

// in the real world this would be in a .env file

// CompareProvider should only be used for pages that contain diffs
export function CartProvider({ children }: Props): JSX.Element {
  const [cart, setCart] = useState<Map<number,number>>(new Map());

  const addItem = (key: number, value: number) => {
    const prevValue = cart.get(key);
    if(prevValue){
        setCart((prevCart) => new Map(prevCart.set(key, value + prevValue)));
    }else{
        setCart((prevCart) => new Map(prevCart.set(key, value)));
    }
  };

  const removeItem = (key: number) => {
    setCart((prevCart) => {
        const newCart = new Map(prevCart);
        newCart.delete(key);
        return newCart;
      });
  }

  const clearAll = () => {
    setCart(new Map<number,number>())
  }
 

  return (
    <CartContext.Provider
      value={{
        cart,
        addItem,
        removeItem,
        clearAll,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
