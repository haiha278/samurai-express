import Image from "next/image";
import AboutUsImage from "@/assets/image/about us.png";
export const UniqueThing = () => {
  return (
    <div className="flex flex-row justify-center gap-[50px] p-[50px]">
      <div>
        <Image src={AboutUsImage} width={500} alt="About Us Image" />
      </div>
      <div className="w-[50%]">
        <div className="text-[rgba(64,121,176,255)] font-serif text-[40px] text-center ">
          Ưu điểm nổi bật của Samurai Express
        </div>
        <div>
          <div className="circle-div">1</div>
          <div className="unique-li">Nguyên Liệu Tươi Ngon</div>
        </div>
      </div>
    </div>
  );
};
