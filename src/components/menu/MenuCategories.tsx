"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { SwiperNivation } from "../swiper/SwiperNavigation";
import { menuCategory } from "@/resources/data";

interface MenuCategoriesProps {
  selectedCategory: string;
  setSelectedCategory: React.Dispatch<React.SetStateAction<string>>;
}

export const MenuCategory = ({
  selectedCategory,
  setSelectedCategory,
}: MenuCategoriesProps) => {
  const handleSelectCategory = (categoryName: string) => {
    setSelectedCategory(categoryName);
  };

  return (
    <div className="pb-[30px] bg-gray-100">
      <div className="w-full relative swiper-parent-component text-black">
        <Swiper spaceBetween={20} slidesPerView={6} className="w-[78%]">
          <SwiperNivation />
          {menuCategory.map((item) => (
            <SwiperSlide
              key={item.id}
              onClick={() => handleSelectCategory(item.name)}
              className={`rounded-[30px] shadow-lg border ${
                selectedCategory === item.name ? "bg-blue-200" : ""
              } border-gray-300 cursor-pointer mt-[30px]`}
            >
              <div
                className={`p-[20px] rounded-[30px] flex text-center justify-center items-center gap-[20px] `}
              >
                <div className="text-[20px] font-bold ">{item.name}</div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};
