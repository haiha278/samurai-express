"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faTrash } from "@fortawesome/free-solid-svg-icons";
import { useCart } from "@/hook/CartContext";
import { useRouter } from "next/navigation";
export const ShoppingCartDetail = () => {
  const router = useRouter();
  const {
    handleShowCartDetail,
    cart,
    totalPriceOfEachItem,
    totalPriceOfAllItem,
    totalItemOfCart,
    removeItemFromCart,
    addItemToCart,
    decreaseQuantityOfExistItem,
  } = useCart();

  const handleCheckOut = () => {
    if (cart.items.length > 0) {
      router.push("/ship");
      handleShowCartDetail();
    }
  };

  return (
    <div className="p-[20px] flex flex-col h-full">
      <div className="flex items-center justify-between border-b border-gray-300 pb-[5px]">
        <div className="font-bold text-[25px]">Giỏ Hàng</div>
        <button
          className="justify-center w-7 h-7 rounded-full bg-gray-400"
          onClick={handleShowCartDetail}
        >
          <FontAwesomeIcon icon={faTimes} className="text-white" />
        </button>
      </div>
      <div className="flex-grow overflow-y-auto custom-scrollbar">
        {cart.items.length > 0 ? (
          cart.items.map((item) => (
            <div
              key={item.id}
              className="border-b border-gray-300 pb-[10px] mt-[30px] mr-[20px]"
            >
              <div className="flex items-center justify-between mb-[1px]">
                <div className="font-bold text-[20px] w-[300px]">
                  {item.name}
                </div>
                <button
                  className="justify-center w-7 h-7 rounded-full bg-gray-400"
                  onClick={() => removeItemFromCart(item.id)}
                >
                  <FontAwesomeIcon icon={faTrash} className="text-white" />
                </button>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex flex-row gap-[20px] items-center">
                  <button
                    className="border-button"
                    onClick={() => decreaseQuantityOfExistItem(item)}
                  >
                    -
                  </button>
                  <div className="font-bold text-[25px] text-topicColor">
                    {item.quantity}
                  </div>
                  <button
                    className="border-button"
                    onClick={() => addItemToCart(item)}
                  >
                    +
                  </button>
                </div>
                <div className="text-[20px]">
                  {(totalPriceOfEachItem(item) ?? 0).toLocaleString("vi-VN", {
                    style: "currency",
                    currency: "VND",
                  })}
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center mt-[90%] font-semibold">
            Giỏ hàng đang trống. Vui lòng quay lại trang chủ để tiếp tục mua
            hàng.
          </div>
        )}
      </div>
      <div className="flex mt-auto flex-col gap-[20px]">
        {cart.items.length > 0 && (
          <div className="mt-[30px] border-b border-gray-300 pb-[10px]">
            <div className="flex justify-between">
              <div className="font-bold text-[20px]">Tiền Hàng</div>
              <div className="font-bold text-[20px]">
                {totalPriceOfAllItem() ?? 0}
              </div>
            </div>
            <div className="flex justify-between mt-[10px]">
              <div className="font-bold text-[20px]">Phí Giao Hàng</div>
              <div className="font-bold text-[20px]">
                {(0).toLocaleString("vi-VN", {
                  style: "currency",
                  currency: "VND",
                })}
              </div>
            </div>
          </div>
        )}
        <div className="flex justify-between items-center border-b border-gray-300 pb-[20px]">
          <div className="flex gap-[10px] items-center">
            <div className="font-bold text-[20px]">TỔNG</div>
            <div className="bg-topicColor text-white font-semibold py-[5px] px-[10px] rounded-[10px] ">
              {totalItemOfCart() ?? 0} MÓN
            </div>
          </div>
          <div className="font-bold text-[27px]">
            {totalPriceOfAllItem() ?? 0}
          </div>
        </div>
        <div className="flex gap-[10px] justify-center items-center">
          <button
            className="inline-block w-[50%] py-[10px] text-[15px] text-topicColor border-2 border-topicColor rounded-lg  text-center "
            onClick={handleShowCartDetail}
          >
            THÊM MÓN
          </button>
          <button
            className={`inline-block w-[50%] py-[10px] text-[15px] ${
              cart.items.length > 0
                ? "text-white bg-topicColor border-topicColor"
                : "text-gray-400 bg-gray-200 border-gray-200"
            } border-2 rounded-lg text-center`}
            disabled={cart.items.length === 0}
            onClick={handleCheckOut}
          >
            THANH TOÁN
          </button>
        </div>
      </div>
    </div>
  );
};
