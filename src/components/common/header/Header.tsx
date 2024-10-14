"use client";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import logoIcon from "@/assets/image/logo.png";
import Image from "next/image";
export const Header = () => {
  const [selectedMenu, setSelectedMenu] = useState<string | null>("menu1");
  return (
    <div className="bg-[rgba(64,121,176,255)] ">
      <div className="text-white flex items-center justify-between mx-[50px]">
        <div>
          <Image src={logoIcon} width={80} height={80} alt="Logo Icon" />
        </div>
        <div className="flex justify-center items-center gap-[50px] text-[17px]">
          <div
            className={`menu-hover ${
              selectedMenu === "menu1" ? "header-selection" : ""
            }`}
            onClick={() => setSelectedMenu("menu1")}
          >
            Về Chúng Tôi
          </div>
          <div
            className={`menu-hover ${
              selectedMenu === "menu2" ? "header-selection" : ""
            }`}
            onClick={() => setSelectedMenu("menu2")}
          >
            Menu
          </div>
          <div
            className={`menu-hover ${
              selectedMenu === "menu3" ? "header-selection" : ""
            }`}
            onClick={() => setSelectedMenu("menu3")}
          >
            Đặt Ship
          </div>
          <div
            className={`menu-hover ${
              selectedMenu === "menu4" ? "header-selection" : ""
            }`}
            onClick={() => setSelectedMenu("menu4")}
          >
            Đặt Bàn
          </div>
          <div
            className={`menu-hover ${
              selectedMenu === "menu5" ? "header-selection" : ""
            }`}
            onClick={() => setSelectedMenu("menu5")}
          >
            Tin Tức
          </div>
          <div
            className={`menu-hover ${
              selectedMenu === "menu6" ? "header-selection" : ""
            }`}
            onClick={() => setSelectedMenu("menu6")}
          >
            Liên Hệ
          </div>
        </div>
        <div>
          <FontAwesomeIcon icon={faPhone} className="text-white mr-[10px]" />
          <div className="inline-block">Hotline: 0328591807</div>
        </div>
      </div>
    </div>
  );
};
