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

  const handleAddToCart = (item: Item) => {
    const formattedItem = {
      ...item,
      image: typeof item.image === "object" ? item.image.src : item.image,
    };
    addItemToCart(formattedItem);
  };

  const renderMenuItems = () => {
    switch (selectedCategory) {
      case "Appetizer":
        return appetizer.map((item) => (
          <SwiperSlide
            key={item.id}
            className={`shadow-lg bg-white border cursor-pointer my-[50px] 
            }`}
          >
            <div className="h-[550px] relative mx-auto">
              <Image
                src={item.image}
                layout="fill"
                objectFit="cover"
                alt={item.name}
                className="mx-auto"
              />
            </div>
            <div className="p-[20px] flex justify-between items-center gap-[20px] mt-[30px]">
              <div>
                <div className="text-[20px] font-bold ">{item.name}</div>
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

      case "Salad":
        return salad.map((item) => (
          <SwiperSlide
            key={item.id}
            className={`shadow-lg bg-white border cursor-pointer my-[50px] 
              }`}
          >
            <div className="h-[550px] relative mx-auto">
              <Image
                src={item.image}
                layout="fill"
                objectFit="cover"
                alt={item.name}
                className="mx-auto"
              />
            </div>
            <div className="p-[20px] flex justify-between items-center gap-[20px] mt-[30px]">
              <div>
                <div className="text-[20px] font-bold ">{item.name}</div>
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

      case "Rice":
        return rice.map((item) => (
          <SwiperSlide
            key={item.id}
            className={`shadow-lg bg-white border cursor-pointer my-[50px] 
              }`}
          >
            <div className="h-[550px] relative mx-auto">
              <Image
                src={item.image}
                layout="fill"
                objectFit="cover"
                alt={item.name}
                className="mx-auto"
              />
            </div>
            <div className="p-[20px] flex justify-between items-center gap-[20px] mt-[30px]">
              <div>
                <div className="text-[20px] font-bold ">{item.name}</div>
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

      case "Sashimi":
        return sashimi.map((item) => (
          <SwiperSlide
            key={item.id}
            className={`shadow-lg bg-white border cursor-pointer my-[50px] 
              }`}
          >
            <div className="h-[550px] relative mx-auto">
              <Image
                src={item.image}
                layout="fill"
                objectFit="cover"
                alt={item.name}
                className="mx-auto"
              />
            </div>
            <div className="p-[20px] flex justify-between items-center gap-[20px] mt-[30px]">
              <div>
                <div className="text-[20px] font-bold ">{item.name}</div>
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

      case "Sushi":
        return sushi.map((item) => (
          <SwiperSlide
            key={item.id}
            className={`shadow-lg bg-white border cursor-pointer my-[50px] 
              }`}
          >
            <div className="h-[550px] relative mx-auto">
              <Image
                src={item.image}
                layout="fill"
                objectFit="cover"
                alt={item.name}
                className="mx-auto"
              />
            </div>
            <div className="p-[20px] flex justify-between items-center gap-[20px] mt-[30px]">
              <div>
                <div className="text-[20px] font-bold ">{item.name}</div>
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

      case "California Roll":
        return californiaRoll.map((item) => (
          <SwiperSlide
            key={item.id}
            className={`shadow-lg bg-white border cursor-pointer my-[50px] 
              }`}
          >
            <div className="h-[550px] relative mx-auto">
              <Image
                src={item.image}
                layout="fill"
                objectFit="cover"
                alt={item.name}
                className="mx-auto"
              />
            </div>
            <div className="p-[20px] flex justify-between items-center gap-[20px] mt-[30px]">
              <div>
                <div className="text-[20px] font-bold ">{item.name}</div>
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

      case "Maki":
        return maki.map((item) => (
          <SwiperSlide
            key={item.id}
            className={`shadow-lg bg-white border cursor-pointer my-[50px] 
              }`}
          >
            <div className="h-[550px] relative mx-auto">
              <Image
                src={item.image}
                layout="fill"
                objectFit="cover"
                alt={item.name}
                className="mx-auto"
              />
            </div>
            <div className="p-[20px] flex justify-between items-center gap-[20px] mt-[30px]">
              <div>
                <div className="text-[20px] font-bold ">{item.name}</div>
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

      case "Nigiri":
        return nigiri.map((item) => (
          <SwiperSlide
            key={item.id}
            className={`shadow-lg bg-white border cursor-pointer my-[50px] 
              }`}
          >
            <div className="h-[550px] relative mx-auto">
              <Image
                src={item.image}
                layout="fill"
                objectFit="cover"
                alt={item.name}
                className="mx-auto"
              />
            </div>
            <div className="p-[20px] flex justify-between items-center gap-[20px] mt-[30px]">
              <div>
                <div className="text-[20px] font-bold ">{item.name}</div>
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

      case "Gunkan":
        return gunkan.map((item) => (
          <SwiperSlide
            key={item.id}
            className={`shadow-lg bg-white border cursor-pointer my-[50px] 
              }`}
          >
            <div className="h-[550px] relative mx-auto">
              <Image
                src={item.image}
                layout="fill"
                objectFit="cover"
                alt={item.name}
                className="mx-auto"
              />
            </div>
            <div className="p-[20px] flex justify-between items-center gap-[20px] mt-[30px]">
              <div>
                <div className="text-[20px] font-bold ">{item.name}</div>
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

      case "Combo":
        return combo.map((item) => (
          <SwiperSlide
            key={item.id}
            className={`shadow-lg bg-white border cursor-pointer my-[50px] 
              }`}
          >
            <div className="h-[550px] relative mx-auto">
              <Image
                src={item.image}
                layout="fill"
                objectFit="cover"
                alt={item.name}
                className="mx-auto"
              />
            </div>
            <div className="p-[20px] flex justify-between items-center gap-[20px] mt-[30px]">
              <div>
                <div className="text-[20px] font-bold ">{item.name}</div>
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

      case "Drinks":
        return drinks.map((item) => (
          <SwiperSlide
            key={item.id}
            className={`shadow-lg bg-white border cursor-pointer my-[50px] 
              }`}
          >
            <div className="h-[550px] relative mx-auto">
              <Image
                src={item.image}
                layout="fill"
                objectFit="cover"
                alt={item.name}
                className="mx-auto"
              />
            </div>
            <div className="p-[20px] flex justify-between items-center gap-[20px] mt-[30px]">
              <div>
                <div className="text-[20px] font-bold ">{item.name}</div>
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

      case "Dessert":
        return dessert.map((item) => (
          <SwiperSlide
            key={item.id}
            className={`shadow-lg bg-white border cursor-pointer my-[50px] 
              }`}
          >
            <div className="h-[550px] relative mx-auto">
              <Image
                src={item.image}
                layout="fill"
                objectFit="cover"
                alt={item.name}
                className="mx-auto"
              />
            </div>
            <div className="p-[20px] flex justify-between items-center gap-[20px] mt-[30px]">
              <div>
                <div className="text-[20px] font-bold ">{item.name}</div>
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
    }
  };

  return (
    <div className="bg-gray-100">
      <div className="w-[60%] relative swiper-parent-component text-black mx-auto">
        <Swiper spaceBetween={20} slidesPerView={1} className="w-[60%]">
          <SwiperNivation />
          {/* {appetizer.map((item) => (
            <SwiperSlide
              key={item.id}
              className={`shadow-lg bg-white border cursor-pointer my-[50px] 
              }`}
            >
              <div className="h-[550px] relative mx-auto">
                <Image
                  src={item.image}
                  layout="fill"
                  objectFit="cover"
                  alt={item.name}
                  className="mx-auto"
                />
              </div>
              <div className="p-[20px] flex justify-between items-center gap-[20px] mt-[30px]">
                <div>
                  <div className="text-[20px] font-bold ">{item.name}</div>
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
          ))} */}
          {renderMenuItems()}
        </Swiper>
      </div>
    </div>
  );
};
