"use client";
import { Footer } from "@/components/common/footer/Footer";
import { Header } from "@/components/common/header/Header";
import { ShoppingCartDetail } from "@/components/common/shopping-cart/ShoppingCartDetail";
import { CategoryDetail } from "@/components/menu/CategoryDetail";
import { MenuCategory } from "@/components/menu/MenuCategories";
import { useCart } from "@/hook/CartContext";
import { useState } from "react";
export default function Ship() {
  const { showCartDetail, handleShowCartDetail } = useCart();
  const [selectedCategory, setSelectedCategory] = useState<string>("");

  return (
    <div className="relative ">
      <div className="fixed w-full top-0 left-0 z-[1000]">
        <Header />
        <MenuCategory
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
      </div>
      <div className="mt-[200px]">
        <CategoryDetail selectedCategory={selectedCategory} />
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
