"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faTrash } from "@fortawesome/free-solid-svg-icons";
import { useCart } from "@/hook/CartContext";
export const ShoppingCartDetail = () => {
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
            <div className="border-b border-gray-300 pb-[10px] mt-[30px] mr-[20px]">
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
                  {totalPriceOfEachItem(item).toLocaleString("vi-VN", {
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
                {totalPriceOfAllItem()}
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
              {totalItemOfCart()} MÓN
            </div>
          </div>
          <div className="font-bold text-[27px]">{totalPriceOfAllItem()}</div>
        </div>
        <div className="flex gap-[10px] justify-center items-center">
          <button
            className="inline-block w-[50%] py-[10px] text-[15px] text-topicColor border-2 border-topicColor rounded-lg  text-center "
            onClick={handleShowCartDetail}
          >
            THÊM MÓN
          </button>
          <button className="inline-block w-[50%] py-[10px] text-[15px] text-white text-topicColor border-2 bg-topicColor border-topicColor rounded-lg  text-center ">
            THANH TOÁN
          </button>
        </div>
      </div>
    </div>
  );
};
