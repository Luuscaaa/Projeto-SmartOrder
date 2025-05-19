import React, { createContext, useContext, useState, ReactNode } from 'react';

type Item = { imagem: string; categoria: string; descricao: string; preco: string };

type OrderContextType = {
  orderItems: Item[];
  total: number;
  setOrder: (items: Item[]) => void;
  clearOrder: () => void;
};

const OrderContext = createContext<OrderContextType | undefined>(undefined);

export const OrderProvider = ({ children }: { children: ReactNode }) => {
  const [orderItems, setOrderItems] = useState<Item[]>([]);

  const setOrder = (items: Item[]) => setOrderItems(items);
  const clearOrder = () => setOrderItems([]);

  const total = orderItems.reduce((s, i) => s + parseFloat(i.preco), 0);

  return (
    <OrderContext.Provider value={{ orderItems, total, setOrder, clearOrder }}>
      {children}
    </OrderContext.Provider>
  );
};

export const useOrder = () => {
  const ctx = useContext(OrderContext);
  if (!ctx) throw new Error('useOrder precisa estar dentro de OrderProvider');
  return ctx;
};
