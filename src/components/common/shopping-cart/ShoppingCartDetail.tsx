import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faTrash } from "@fortawesome/free-solid-svg-icons";

export const ShoppingCartDetail = () => {
  return (
    <div className="p-[20px]">
      <div className="flex items-center justify-between border-b border-gray-400 pb-[10px] mb-[30px]">
        <div className="font-bold text-[20px]">Shopping Cart</div>
        <button className="justify-center w-7 h-7 rounded-full bg-gray-400">
          <FontAwesomeIcon icon={faTimes} className="text-white" />
        </button>
      </div>
      <div className="border-b border-gray-400 pb-[10px] ">
        <div className="flex items-center  justify-between">
          <div className="font-bold text-[20px]">
            Kanzunoko Nishin Sashimi Set
          </div>
          <button className="justify-center w-7 h-7 rounded-full bg-gray-400">
            <FontAwesomeIcon icon={faTrash} className="text-white " />
          </button>
        </div>
        <div>
          <div className="flex flex-row justify-between">
            <button className="border-button">-</button>
            <div className="font-bold text-[20px]">20</div>
            <button className="border-button">+</button>
          </div>
        </div>
      </div>
    </div>
  );
};
