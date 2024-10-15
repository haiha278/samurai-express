"use client";
import Image from "next/image";
import Galery1 from "@/assets/image/gallery1.png";
import Galery2 from "@/assets/image/gallery2.png";
import Galery3 from "@/assets/image/gallery3.png";
import Galery4 from "@/assets/image/gallery4.png";
import Galery5 from "@/assets/image/galerry5.png";
import Galery6 from "@/assets/image/gallery6.png";
import Galery7 from "@/assets/image/gallery7.png";
import Galery8 from "@/assets/image/gallery8.png";

const images = [
  { id: 1, image: Galery1 },
  { id: 2, image: Galery2 },
  { id: 3, image: Galery3 },
  { id: 4, image: Galery4 },
  { id: 5, image: Galery5 },
  { id: 6, image: Galery6 },
  { id: 7, image: Galery7 },
  { id: 8, image: Galery8 },
];

export const Gallery = () => {
  return (
    <div className="flex flex-col gap-[20px]">
      <div className="text-[rgba(64,121,176,255)] font-serif text-[40px] text-center mt-[20px]">
        Gallery
      </div>
      <div className="text-center text-[23px] italic">
        Nơi Hương Vị Hòa Quyện Cùng Nghệ Thuật.
      </div>
      <div className="grid grid-cols-4 gap-[10px] w-[80%] mx-auto mb-[50px]">
        {images.map((image) => (
          <div>
            <Image
              src={image.image}
              width={400}
              height={100}
              alt="Menu Dish"
              className="mx-auto"
            />
          </div>
        ))}
      </div>
    </div>
  );
};
