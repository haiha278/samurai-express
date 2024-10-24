"use client";

import { Footer } from "@/components/common/footer/Footer";
import { Header } from "@/components/common/header/Header";
import { ShoppingCartDetail } from "@/components/common/shopping-cart/ShoppingCartDetail";
import { AboutUs } from "@/components/content/AboutUs";
import { Gallery } from "@/components/content/Gallery";
import { SignatureDishes } from "@/components/content/SignatureDishes";
import { UniqueThing } from "@/components/content/UniqueThing";
import { useCart } from "@/hook/CartContext";
import { useEffect } from "react";
export default function Home() {
  const { showCartDetail, handleShowCartDetail } = useCart();

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

  return (
    <div className="relative ">
      <div className="fixed w-full top-0 left-0 z-[1000]">
        <Header />
      </div>
      <div className="mt-[80px]">
        <AboutUs />
      </div>
      <div className="bg-[rgba(247,242,238,255)]">
        <UniqueThing />
      </div>
      <div>
        <SignatureDishes />
      </div>
      <div>
        <Gallery />
      </div>
      {showCartDetail && (
        <>
          <div
            className="fixed top-0 left-0 w-full h-full bg-gray-500 opacity-50 z-[1000]"
            onClick={handleShowCartDetail}
          ></div>
          <div className="w-[25%] h-full fixed top-0 right-0 bg-white z-[1001] overflow-y-auto">
            <ShoppingCartDetail />
          </div>
        </>
      )}
      <div>
        <Footer />
      </div>
    </div>
  );
}
