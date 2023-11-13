"use client";

import { CartContextProvider } from "@/hooks/useCart";

interface CartPtovidersProps {
  children: React.ReactNode;
}

const CartProvider: React.FC<CartPtovidersProps> = ({ children }) => {
  return <CartContextProvider>{children}</CartContextProvider>;
};

export default CartProvider;
