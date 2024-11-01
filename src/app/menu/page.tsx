"use client";
import { Footer } from "@/components/common/footer/Footer";
import { Header } from "@/components/common/header/Header";
import { ShoppingCartDetail } from "@/components/common/shopping-cart/ShoppingCartDetail";
import { useCart } from "@/hook/CartContext";
export default function Ship() {
  const { showCartDetail, handleShowCartDetail } = useCart();

  return (
    <div className="relative ">
      <div className="fixed w-full top-0 left-0 z-[1000]">
        <Header />
      </div>
      <div className="bg-[rgba(247,242,238,255)] mt-[80px]">
        {/* <div>
          <ShippingCost />
        </div>
        <div className="flex justify-center gap-[50px] p-[50px]">
          <ShippingInfo />
          <ConfirmOrders />
        </div> */}
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
