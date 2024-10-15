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
          Chúng tôi tự hào mang đến những bữa ăn nhanh, tiện lợi nhưng vẫn giữ
          được chất lượng, cùng mức giá hợp lý, để bất kỳ ai cũng có thể thưởng
          thức. Hãy tưởng tượng, sau một ngày làm việc bận rộn, bạn bước vào
          Samurai Express, chọn cho mình những box sushi tươi mới. Tất cả chỉ
          mất vài phút, nhưng sự hài lòng sẽ kéo dài mãi. Samurai Express không
          chỉ là một nhà hàng, mà là cây cầu nối giữa hai nền văn hóa, mang đến
          cho bạn những trải nghiệm ẩm thực tuyệt vời mà không làm bạn phải đắn
          đo về giá cả.
        </div>
      </div>
    </div>
  );
};
