"use client";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logoIcon from "@/assets/image/logo.png";
import Image from "next/image";
import { useCart } from "@/hook/CartContext";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { useHeader } from "@/hook/HeaderContext";
import Link from "next/link";
export const Header = () => {
  const { totalItemOfCart, handleShowCartDetail } = useCart();

  const { currentPage, setCurrentPage } = useHeader();

  return (
    <div className="bg-[rgba(64,121,176,255)] ">
      <div className="text-white flex items-center justify-between mx-[50px]">
        <div>
          <Image src={logoIcon} width={80} height={80} alt="Logo Icon" />
        </div>
        <div className="flex justify-center items-center gap-[50px] text-[17px]">
          <Link
            href="/home"
            className={`menu-hover ${
              currentPage === "menu1" ? "header-selection" : ""
            }`}
            onClick={() => setCurrentPage("menu1")}
          >
            Về Chúng Tôi
          </Link>
          <Link
            href="/menu"
            className={`menu-hover ${
              currentPage === "menu2" ? "header-selection" : ""
            }`}
            onClick={() => setCurrentPage("menu2")}
          >
            Menu
          </Link>
          <Link
            href="/ship"
            className={`menu-hover ${
              currentPage === "menu3" ? "header-selection" : ""
            }`}
            onClick={() => setCurrentPage("menu3")}
          >
            Đặt Ship
          </Link>
          <div
            className={`menu-hover ${
              currentPage === "menu5" ? "header-selection" : ""
            }`}
            onClick={() => setCurrentPage("menu5")}
          >
            Tin Tức
          </div>
          <div
            className={`menu-hover ${
              currentPage === "menu6" ? "header-selection" : ""
            }`}
            onClick={() => setCurrentPage("menu6")}
          >
            Liên Hệ
          </div>
        </div>
        <div className="flex items-center">
          <div
            className="mr-[60px] flex items-center gap-[5px] cursor-pointer"
            onClick={handleShowCartDetail}
          >
            <FontAwesomeIcon
              icon={faShoppingCart}
              className="text-white text-[25px]"
            />
            <div className=" bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center">
              {totalItemOfCart()}
            </div>
          </div>
          <FontAwesomeIcon icon={faPhone} className="text-white mr-[10px]" />
          <div className="inline-block">Hotline: 0347466788</div>
        </div>
      </div>
    </div>
  );
};
