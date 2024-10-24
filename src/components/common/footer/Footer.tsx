"use client";
import Image from "next/image";
import logoIcon from "@/assets/image/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTiktok,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
export const Footer = () => {
  return (
    <div className="bg-[rgba(64,121,176,255)] text-white p-[50px]">
      <div className="flex justify-center gap-[120px]">
        <div className="flex flex-col gap-[10px]">
          <Image src={logoIcon} width={120} height={120} alt="Logo Icon" />
          <div className="font-bold text-[20px]">
            SAMURAI EXPRESS - MÓN NHẬT CHUẨN VỊ, PHỤC VỤ TỨC THÌ
          </div>
          <div className="flex text-justify gap-[20px]">
            <div className="w-[120px]">Địa Chỉ</div>
            <div>
              Tầng 1 tòa A11 ki ốt khu trung tâm Nghĩa Tân, Cầu Giấy, Hà Nội
            </div>
          </div>
          <div className="flex text-justify gap-[20px]">
            <div className="w-[120px]">Số Điện Thoại</div>
            <div>0347466788</div>
          </div>
        </div>
        <div className="flex flex-col gap-[15px]">
          <div className="flex flex-col gap-[10px]">
            <div className="font-bold text-[20px]">Về chúng tôi</div>
            <div className="footer-item ">Về chúng tôi</div>
            <div className="footer-item ">Menu</div>
            <div className="footer-item ">Đặt Ship</div>
            <div className="footer-item ">Tin Tức</div>
            <div className="footer-item ">Liên Hệ</div>
          </div>
          <div className="flex flex-col gap-[10px]">
            <div className="font-bold text-[20px]">
              Chính sách và điều khoản
            </div>
            <div className="footer-item ">Chính sách bảo mật thông tin</div>
            <div className="footer-item ">Điều khoản sử dụng website</div>
            <div className="footer-item ">Chính sách đổi trả</div>
            <div className="footer-item ">Chính sách giao hàng</div>
            <div className="footer-item ">Chính sách thanh toán</div>
            <div className="footer-item ">Thông tin hàng hóa</div>
          </div>
        </div>
        <div className="w-[200px]">
          <div className="font-bold text-[20px] mb-[15px]">Follow US!</div>
          <div className="flex justify-end gap-[30px] text-[30px]">
            <FontAwesomeIcon
              icon={faFacebook}
              className="text-white cursor-pointer"
              onClick={() => {
                window.open(
                  "https://www.facebook.com/profile.php?id=61566303890818",
                  "_blank",
                  "noopener,noreferrer"
                );
              }}
            />
            <FontAwesomeIcon
              icon={faInstagram}
              className="text-white cursor-pointer"
              onClick={() => {
                window.open(
                  "https://www.instagram.com/officialsamuraiexpress/profilecard/?igsh=MWFkYWhlZXg3Ynhycw==",
                  "_blank",
                  "noopener,noreferrer"
                );
              }}
            />
            <FontAwesomeIcon
              icon={faTiktok}
              className="text-white cursor-pointer"
            />
          </div>
        </div>
      </div>
      <div className="text-center text-[20px] font-bold mt-[50px]">
        CÔNG TY TNHH SAMURAI EXPRESS VIỆT NAM
      </div>
    </div>
  );
};
