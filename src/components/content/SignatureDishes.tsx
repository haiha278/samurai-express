"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";
import { SwiperNivation } from "../swiper/SwiperNavigation";
import Menu1 from "@/assets/image/menu1.png";
import Menu2 from "@/assets/image/menu2.png";
import Menu3 from "@/assets/image/menu3.png";
import Menu4 from "@/assets/image/menu4.png";
import Menu5 from "@/assets/image/menu5.png";
import Menu6 from "@/assets/image/menu6.png";
import Menu7 from "@/assets/image/menu7.png";
import Menu8 from "@/assets/image/menu8.png";
import Menu9 from "@/assets/image/menu9.png";
import Menu10 from "@/assets/image/menu10.png";
import Menu11 from "@/assets/image/menu11.png";
import Menu12 from "@/assets/image/menu12.png";
import Menu13 from "@/assets/image/menu13.png";
import Menu14 from "@/assets/image/menu14.png";
import Menu15 from "@/assets/image/menu15.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
const items = [
  { id: 1, name: "Surimi Nigiri", price: 9000, image: Menu1 },
  { id: 2, name: "Unagi Nigiri", price: 21000, image: Menu2 },
  { id: 3, name: "Surimi Mayo Gunkan", price: 9000, image: Menu3 },
  { id: 4, name: "Maguro Mayo Gunkan", price: 12000, image: Menu4 },
  { id: 5, name: "Sake Mayo Gunkan", price: 18000, image: Menu5 },
  { id: 6, name: "Wakame Gunkan", price: 9000, image: Menu6 },
  { id: 7, name: "Maguro Mayo Onigiri", price: 22000, image: Menu7 },
  { id: 8, name: "Maki Set", price: 30000, image: Menu8 },
  { id: 9, name: "California Roll", price: 50000, image: Menu9 },
  { id: 10, name: "Kare Tonkatsu", price: 65000, image: Menu10 },
  { id: 11, name: "Wakame Salad", price: 49000, image: Menu11 },
  { id: 12, name: "Sake Set", price: 95000, image: Menu12 },
  {
    id: 13,
    name: "Kanzunoko Nishin Sashimi Set",
    price: 105000,
    image: Menu13,
  },
  { id: 14, name: "Miso Soup", price: 25000, image: Menu14 },
  { id: 15, name: "Seaweed", price: 10000, image: Menu15 },
];

export const SignatureDishes = () => {
  return (
    <div className="bg-gray-50 flex flex-col gap-[30px]">
      <div className="text-[rgba(64,121,176,255)] font-serif text-[40px] text-center pt-[20px]">
        Món đặc trưng
      </div>
      <div className="text-center text-[23px] italic">
        Thưởng thức ẩm thực xứ sở phù tang ngay tại đây.
      </div>
      <div className="w-full relative swiper-parent-component text-black">
        <Swiper spaceBetween={50} slidesPerView={3} className="w-[80%]">
          <SwiperNivation />
          {items.map((item) => (
            <SwiperSlide
              key={item.id}
              className="flex-shrink-0 pt-[20px] rounded-[30px] shadow-2xl bg-white border border-gray-300"
            >
              <div className="w-[300px h-[400px] relative mx-auto">
                <Image
                  src={item.image}
                  layout="fill"
                  objectFit="cover"
                  alt="Menu Dish"
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
                <FontAwesomeIcon
                  icon={faShoppingCart}
                  className="text-gray-600 text-[25px]"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};
