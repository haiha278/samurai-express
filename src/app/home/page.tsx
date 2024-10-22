"use client";

import { Header } from "@/components/common/header/Header";
import { ShoppingCartDetail } from "@/components/common/shopping-cart/ShoppingCartDetail";
import { AboutUs } from "@/components/content/AboutUs";
import { Gallery } from "@/components/content/Gallery";
import { SignatureDishes } from "@/components/content/SignatureDishes";
import { UniqueThing } from "@/components/content/UniqueThing";
import { useCart } from "@/hook/CartContext";
export default function Home() {
  const { showCartDetail, handleShowCartDetail } = useCart();

  return (
    <div className="relative ">
      <div className="fixed w-full top-0 left-0 z-[1000]">
        <Header />
      </div>
      <div>
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
            className="fixed top-0 left-0 w-full h-full bg-gray-500 opacity-75 z-[1000]"
            onClick={handleShowCartDetail}
          ></div>
          <div className="w-[20%] h-full absolute top-0 right-0 bg-white z-[1001] overflow-auto">
            <ShoppingCartDetail />
          </div>
        </>
      )}
    </div>
  );
}
