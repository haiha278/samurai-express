"use client";
import { CartProvider } from "@/hook/CartContext";
import { ReactNode } from "react";
export const ShoppingCart = ({ children }: { children: ReactNode }) => {
  return <CartProvider>{children}</CartProvider>;
};
