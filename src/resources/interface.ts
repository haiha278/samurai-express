import { StaticImageData } from "next/image";

export interface Item {
  id: number;
  name: string;
  price: number;
  image: string | StaticImageData;
}

export interface MenuCategory {
  id: number;
  name: string;
}
