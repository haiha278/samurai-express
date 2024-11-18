import { Swiper, SwiperSlide } from "swiper/react";
import { SwiperNivation } from "../swiper/SwiperNavigation";
import {
  appetizer,
  californiaRoll,
  combo,
  dessert,
  drinks,
  gunkan,
  maki,
  nigiri,
  rice,
  salad,
  sashimi,
  sushi,
} from "@/resources/data";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { useCart } from "@/hook/CartContext";
import { Item } from "@/resources/interface";

interface CategoryDetailProps {
  selectedCategory: string;
}

export const CategoryDetail = ({ selectedCategory }: CategoryDetailProps) => {
  const { addItemToCart } = useCart();

  const renderItems = (items: Item[]) => {
    return items.map((item) => (
      <SwiperSlide
        key={item.id}
        className="shadow-lg bg-white border cursor-pointer my-[50px]"
      >
        <div className="h-[500px] w-full relative mx-auto">
          <Image
            src={item.image}
            layout="fill"
            objectFit="cover"
            alt={item.name}
            className="mx-auto rounded-lg shadow-md"
          />
        </div>
        <div className="p-[20px] flex justify-between items-center gap-[20px] mt-[30px]">
          <div>
            <div className="text-[20px] font-bold">{item.name}</div>
            <div className="mt-[20px] text-[20px]">
              {item.price.toLocaleString("vi-VN", {
                style: "currency",
                currency: "VND",
              })}
            </div>
          </div>
          <div>
            <FontAwesomeIcon
              icon={faShoppingCart}
              onClick={() => handleAddToCart(item)}
              className="text-gray-600 text-[25px] hover:cursor-pointer transform-gpu hover:translate-y-[-10px]"
            />
          </div>
        </div>
      </SwiperSlide>
    ));
  };

  const handleAddToCart = (item: Item) => {
    const formattedItem = {
      ...item,
      image: typeof item.image === "object" ? item.image.src : item.image,
    };
    addItemToCart(formattedItem);
  };

  const renderMenuItems = () => {
    switch (selectedCategory) {
      case "Khai Vị":
        return renderItems(appetizer);

      case "Salad":
        return renderItems(salad);

      case "Cơm":
        return renderItems(rice);

      case "Sashimi":
        return renderItems(sashimi);

      case "Sushi":
        return renderItems(sushi);

      case "California Roll":
        return renderItems(californiaRoll);

      case "Maki":
        return renderItems(maki);

      case "Nigiri":
        return renderItems(nigiri);

      case "Gunkan":
        return renderItems(gunkan);

      case "Combo":
        return renderItems(combo);

      case "Đồ Uống":
        return renderItems(drinks);

      case "Tráng Miệng":
        return renderItems(dessert);

      default:
        return null;
    }
  };

  return (
    <div className="bg-gray-100">
      <div className="w-[60%] relative swiper-parent-component text-black mx-auto">
        <Swiper spaceBetween={20} slidesPerView={1} className="w-[60%]">
          <SwiperNivation />
          {renderMenuItems()}
        </Swiper>
      </div>
    </div>
  );
};
