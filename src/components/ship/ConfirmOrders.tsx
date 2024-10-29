import Image from "next/image";
import { useCart } from "@/hook/CartContext";
import { useState } from "react";
export const ConfirmOrders = () => {
  const { cart, totalPriceOfAllItem } = useCart();
  const [selectedOption, setSelectedOption] = useState<string>();

  const handleSelectPaidOption = (id: string) => {
    setSelectedOption(id);
  };
  return (
    <div className="w-[600px] bg-white border border-gray-300 shadow-md rounded-lg">
      <h2 className="text-lg font-semibold text-white bg-topicColor p-4">
        XÁC NHẬN ĐƠN HÀNG
      </h2>
      {cart.items.length > 0 ? (
        <>
          {cart.items.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between p-2"
            >
              <div className="flex items-center gap-4">
                <div>
                  <Image
                    src={item.image}
                    width={100}
                    height={100}
                    alt="Image"
                  />
                </div>
                <div className="max-w-[200px] break-words">
                  <span className="font-medium">{item.name}</span> x{" "}
                  {item.quantity}
                </div>
              </div>
              <div className="text-red-600 font-semibold">
                {item.price.toLocaleString("vi-VN", {
                  style: "currency",
                  currency: "VND",
                })}
              </div>
            </div>
          ))}
          <div className="flex px-2 justify-between items-center mt-8">
            <div className="text-base text-gray-800 bg-gray-100 p-2 w-4/5">
              Tạm Tính
            </div>
            <div className="text-red-600 font-semibold">
              {totalPriceOfAllItem()}
            </div>
          </div>
          <div className="flex p-2 justify-between items-center">
            <div className="text-base text-gray-800 bg-gray-100 p-2 w-4/5">
              Tổng
            </div>
            <div className="text-red-600 font-semibold">
              {totalPriceOfAllItem()}
            </div>
          </div>
          <div className="px-2 mt-8 text-base">
            (Chưa bao gồm phí vận chuyển)
          </div>
          <div className="text-red-600 mt-4 px-2">
            * VUI LÒNG CHỌN HÌNH THỨC THANH TOÁN
          </div>
          <div
            className="flex items-center gap-4 bg-gray-50 p-4 mx-4 my-4 cursor-pointer hover:bg-gray-100"
            onClick={() => handleSelectPaidOption("card")}
          >
            <div
              className={` w-4 h-4 border-2  rounded-full flex items-center justify-center mr-2 ${
                selectedOption === "card" ? " border-red-600" : " border-black"
              } `}
            >
              <div
                className={`${
                  selectedOption === "card"
                    ? " w-2 h-2 bg-red-600 rounded-full"
                    : " "
                }`}
              ></div>
            </div>
            <span className="font-semibold">Chuyển khoản ngân hàng</span>
          </div>
          <div
            className="flex items-center gap-4 bg-gray-50 p-4 mx-4 my-4 cursor-pointer hover:bg-gray-100"
            onClick={() => handleSelectPaidOption("cod")}
          >
            <div
              className={` w-4 h-4 border-2  rounded-full flex items-center justify-center mr-2 ${
                selectedOption === "cod" ? " border-red-600" : " border-black"
              } `}
            >
              <div
                className={`${
                  selectedOption === "cod"
                    ? " w-2 h-2 bg-red-600 rounded-full"
                    : " "
                }`}
              ></div>
            </div>
            <span className="font-semibold">Trả tiền mặt khi nhận hàng</span>
          </div>
        </>
      ) : (
        <div className="text-center mt-[30%] font-semibold">
          Giỏ hàng đang trống. Vui lòng quay lại trang chủ để tiếp tục mua hàng.
        </div>
      )}
    </div>
  );
};
