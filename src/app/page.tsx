"use client";

import { useCart } from "@/hook/CartContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
export default function Home() {
  const router = useRouter();
  const { showCartDetail } = useCart();
  useEffect(() => {
    router.push("/home");
  }, [router]);

  useEffect(() => {
    if (showCartDetail) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [showCartDetail]);

  return null;
}
