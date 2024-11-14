import { Swiper, SwiperSlide } from "swiper/react";
import { SwiperNivation } from "../swiper/SwiperNavigation";
import { appetizer } from "@/resources/data";

interface CategoryDetailProps {
  selectedCategory: string;
  setSelectedCategory: React.Dispatch<React.SetStateAction<string>>;
}

export const CategoryDetail = () => {
  return (
    <div>
      <div className="w-[40%] relative swiper-parent-component text-black mx-auto">
        <Swiper spaceBetween={20} slidesPerView={1} className="w-[70%]">
          <SwiperNivation />
          {appetizer.map((item) => (
            <SwiperSlide
              key={item.id}
              className={`rounded-[30px] shadow-lg bg-white border border-gray-300 cursor-pointer mt-[30px] 
              }`}
            >
              <div className="p-[20px] flex text-center justify-center items-center gap-[20px]">
                <div className="text-[20px] font-bold ">{item.name}</div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};
