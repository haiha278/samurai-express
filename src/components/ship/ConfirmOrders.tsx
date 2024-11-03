import Image from "next/image";
import { useCart } from "@/hook/CartContext";
import { useState } from "react";
import QRCode from "@/assets/image/qrCode.jpg";
export const ConfirmOrders = () => {
  const { cart, totalPriceOfAllItem } = useCart();
  const [selectedOption, setSelectedOption] = useState<string>("card");

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
              className="flex items-center justify-between p-4"
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
          <div className="flex px-4 justify-between items-center mt-8">
            <div className="text-base text-gray-800 bg-gray-100 p-4 w-4/5">
              Tạm Tính
            </div>
            <div className="text-red-600 font-semibold">
              {totalPriceOfAllItem() ?? 0}
            </div>
          </div>
          <div className="flex p-4 justify-between items-center">
            <div className="text-base text-gray-800 bg-gray-100 p-4 w-4/5">
              Tổng
            </div>
            <div className="text-red-600 font-semibold">
              {totalPriceOfAllItem() ?? 0}
            </div>
          </div>
          <div className="px-4 mt-8 text-base">
            (Chưa bao gồm phí vận chuyển)
          </div>
          <div className="text-red-600 mt-4 px-4">
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
          {selectedOption === "card" && (
            <div>
              <Image
                width={300}
                height={300}
                src={QRCode}
                alt="qr_image"
                className="mx-auto"
              />
              <div className="flex flex-col gap-[15px] mt-[20px] p-4">
                <div>
                  Chủ TK: <strong>Vũ Lê Minh</strong>
                </div>
                <div>
                  Số TK: <strong>0866177929</strong>
                </div>
                <div>Nội dung : Tên khách hàng + SĐT đặt hàng</div>
              </div>
            </div>
          )}
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
          {selectedOption === "cod" && (
            <div>
              <div className="text-gray-500 text-[15px] px-[40px]">
                Trả tiền mặt khi giao hàng
              </div>
            </div>
          )}
          <div className="text-gray-500 px-4 mt-[40px]">
            Bằng việc bấm nút đặt hàng, tôi xác nhận đã đọc và đồng ý với{" "}
            <a href="#" className="text-topicColor underline">
              điều khoản và điều kiện
            </a>{" "}
            của website.
          </div>
          <div className="mx-4 py-4 bg-topicColor text-white text-center rounded-3xl mt-[50px] mb-[20px]">
            Đặt Hàng
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
