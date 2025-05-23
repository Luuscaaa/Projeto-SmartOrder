import React, { createContext, useContext, useState, ReactNode } from 'react';

type Item = {
  imagem: string;
  categoria: string;
  descricao: string;
  preco: string;
};

type CartContextType = {
  cartItems: Item[];
  addToCart: (item: Item) => void;
  removeFromCart: (item: Item) => void;
  clearCart: () => void;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cartItems, setCartItems] = useState<Item[]>([]);

  const addToCart = (item: Item) => {
    setCartItems(prev => [...prev, item]);
  };

  const removeFromCart = (itemToRemove: Item) => {
    setCartItems(prev => prev.filter(item => item !== itemToRemove));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, clearCart}}>
      {children}
    </CartContext.Provider>
  );


};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart precisa ser usado dentro de um CartProvider");
  return context;
};
