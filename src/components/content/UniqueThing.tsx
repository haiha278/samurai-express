import Image from "next/image";
import ImageForUnique from "@/assets/image/unique_image.png";
export const UniqueThing = () => {
  return (
    <div className="flex flex-row justify-center gap-[50px] p-[50px]">
      <div className="w-[50%]">
        <div className="text-[rgba(64,121,176,255)] font-serif text-[40px] text-center ">
          Ưu điểm nổi bật của Samurai Express
        </div>
        <div className="flex flex-col gap-[60px]">
          <div className="flex gap-[20px]">
            <div className="mt-[9px]">
              <div className="circle-div">1</div>
            </div>
            <div>
              <div className="unique-li">Nguyên Liệu Tươi Ngon</div>
              <div className="text-[18px]">
                Được nhập khẩu và sử dụng trong ngày. Quy trình lựa chọn, bảo
                quản, xử lý và chế biến được tuân thủ theo quy chuẩn nghiêm
                ngặt, đảm bảo vệ sinh an toàn thực phẩm. Công thức độc quyền đem
                lại hương vị giao thoa của ẩm thực Việt – Nhật.
              </div>
            </div>
          </div>
          <div className="flex gap-[20px]">
            <div className="mt-[9px]">
              <div className="circle-div">2</div>
            </div>
            <div>
              <div className="unique-li">Order và chuẩn bị đồ nhanh chóng</div>
              <div className="text-[18px]">
                Sự tiện lợi là một trong những ưu tiên hàng đầu của chúng tôi.
                Chỉ với vài cú nhấp chuột hoặc một lần gọi điện, món ăn của bạn
                sẽ được chuẩn bị ngay lập tức và sẵn sàng trong vài phút.
              </div>
            </div>
          </div>
          <div className="flex gap-[20px]">
            <div className="mt-[9px]">
              <div className="circle-div">3</div>
            </div>
            <div>
              <div className="unique-li">
                Giá cả hợp lý, đưa món Nhật đến gần hơn với người Việt
              </div>
              <div className="text-[18px]">
                Chúng tôi mong muốn bất kỳ ai cũng có thể thưởng thức ẩm thực
                Nhật mà không lo ngại về chi phí, mang lại sự gần gũi và thân
                quen với mọi người.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Image src={ImageForUnique} width={500} alt="About Us Image" />
      </div>
    </div>
  );
};
