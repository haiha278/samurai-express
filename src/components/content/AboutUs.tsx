import Image from "next/image";
import AboutUsImage from "@/assets/image/about us.png";
export const AboutUs = () => {
  return (
    <div className="flex flex-row justify-center gap-[50px] p-[50px]">
      <div>
        <Image src={AboutUsImage} width={500} alt="About Us Image" />
      </div>
      <div className="w-[50%] text-center flex flex-col items-center justify-center gap-[20px]">
        <div className="text-[rgba(64,121,176,255)] font-serif text-[40px]">
          Câu chuyện Samurai Express
        </div>
        <div className="italic text-[20px] text-gray-500 ">
          Từ một ý tưởng khởi nghiệp <br />
          Đến hệ thống Tiệm ăn Nhật cho người Việt
        </div>
        <div className="max-w-[80%] text-[20px]">
          Từ một huyền thoại mới ở Hà Nội - Samurai Express. Hòa quyện giữa
          truyền thống và hiện đại, chúng tôi gửi tâm hồn vào mỗi miếng sushi,
          mỗi lát sashimi. Samurai Express mở cửa mỗi ngày, không chỉ để thưởng
          thức ẩm thực tinh tế, mà còn để khám phá và đồng hành cùng những trái
          tim đam mê. Hãy cùng chúng tôi, khám phá câu chuyện đằng sau mỗi món
          ăn, để những hương vị tại Samurai Express trở thành kỷ niệm đáng nhớ
          trong cuộc sống của bạn.
        </div>
      </div>
    </div>
  );
};
