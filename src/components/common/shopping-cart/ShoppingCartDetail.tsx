import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faTrash } from "@fortawesome/free-solid-svg-icons";
import { useCart } from "@/hook/CartContext";
export const ShoppingCartDetail = () => {
  const { handleShowCartDetail } = useCart();
  return (
    <div className="p-[20px]">
      <div className="flex items-center justify-between border-b border-gray-400 pb-[10px] mb-[30px]">
        <div className="font-bold text-[20px]">Shopping Cart</div>
        <button
          className="justify-center w-7 h-7 rounded-full bg-gray-400"
          onClick={handleShowCartDetail}
        >
          <FontAwesomeIcon icon={faTimes} className="text-white" />
        </button>
      </div>
      <div className="border-b border-gray-400 pb-[10px] ">
        <div className="flex items-center  justify-between mb-[25px]">
          <div className="font-bold text-[20px] w-[300px]">
            Kanzunoko Nishin Sashimi Set
          </div>
          <button className="justify-center w-7 h-7 rounded-full bg-gray-400">
            <FontAwesomeIcon icon={faTrash} className="text-white " />
          </button>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex flex-row gap-[20px] items-center">
            <button className="border-button">-</button>
            <div className="font-bold text-[25px] text-topicColor">20</div>
            <button className="border-button">+</button>
          </div>
          <div className="text-[20px]">
            {(100000).toLocaleString("vi-VN", {
              style: "currency",
              currency: "VND",
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
