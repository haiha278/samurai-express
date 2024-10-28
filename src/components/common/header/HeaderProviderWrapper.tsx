"use client";
import { HeaderProvider } from "@/hook/HeaderContext";
import { ReactNode } from "react";
export const HeaderProviderWrapper = ({
  children,
}: {
  children: ReactNode;
}) => {
  return <HeaderProvider>{children}</HeaderProvider>;
};
