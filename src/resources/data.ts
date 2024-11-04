import MainMenu1 from "@/assets/image/MainMenu1.png";
import MainMenu2 from "@/assets/image/MainMenu2.png";
import MainMenu3 from "@/assets/image/MainMenu2.png";
import MainMenu4 from "@/assets/image/MainMenu2.png";
import MainMenu5 from "@/assets/image/MainMenu2.png";
import MainMenu6 from "@/assets/image/MainMenu2.png";
import MainMenu7 from "@/assets/image/MainMenu2.png";
import MainMenu8 from "@/assets/image/MainMenu2.png";
import MainMenu9 from "@/assets/image/MainMenu2.png";
import MainMenu10 from "@/assets/image/MainMenu2.png";
import MainMenu11 from "@/assets/image/MainMenu2.png";
import MainMenu12 from "@/assets/image/MainMenu2.png";
import MainMenu13 from "@/assets/image/MainMenu2.png";
import MainMenu14 from "@/assets/image/MainMenu2.png";
import MainMenu15 from "@/assets/image/MainMenu2.png";
import MainMenu16 from "@/assets/image/MainMenu2.png";
import MainMenu17 from "@/assets/image/MainMenu2.png";
import MainMenu18 from "@/assets/image/MainMenu2.png";
import MainMenu19 from "@/assets/image/MainMenu2.png";
import MainMenu20 from "@/assets/image/MainMenu2.png";
import MainMenu21 from "@/assets/image/MainMenu2.png";
import MainMenu22 from "@/assets/image/MainMenu2.png";
import MainMenu23 from "@/assets/image/MainMenu2.png";
import MainMenu24 from "@/assets/image/MainMenu2.png";
import MainMenu25 from "@/assets/image/MainMenu2.png";
import MainMenu26 from "@/assets/image/MainMenu2.png";
import MainMenu27 from "@/assets/image/MainMenu2.png";
import MainMenu28 from "@/assets/image/MainMenu2.png";
import { Item, MenuCategory } from "./interface";

export const menuCategory: MenuCategory[] = [
  { id: 1, name: "Appetizer" },
  { id: 2, name: "Salad" },
  { id: 3, name: "Rice" },
  { id: 4, name: "Sashimi" },
  { id: 5, name: "Sushi" },
  { id: 6, name: "California Roll" },
  { id: 7, name: "Maki" },
  { id: 8, name: "Nigiri" },
  { id: 9, name: "Gunkan" },
  { id: 10, name: "Combo" },
  { id: 11, name: "Drinks" },
  { id: 12, name: "Dessert" },
];

export const appetizer: Item[] = [
  { id: 1, name: "Canh Miso Rong Biển", price: 19000, image: MainMenu1 },
  { id: 2, name: "Rong biển miếng", price: 5000, image: MainMenu2 },
];

export const salad: Item[] = [
  { id: 1, name: "Salad rong biển tươi", price: 49000, image: MainMenu3 },
  { id: 2, name: "Salad rong nho sốt mè rang", price: 59000, image: MainMenu4 },
];

export const rice: Item[] = [
  { id: 1, name: "Cơm lươn Nhật", price: 169000, image: MainMenu5 },
  {
    id: 2,
    name: "Cơm tonkatsu với sốt curry",
    price: 65000,
    image: MainMenu6,
  },
];

export const sashimi: Item[] = [
  { id: 1, name: "Sashimi cá hồi (100gr)", price: 89000, image: MainMenu7 },
  {
    id: 2,
    name: "Sashimi bạch tuộc (100gr)",
    price: 105000,
    image: MainMenu8,
  },
  {
    id: 3,
    name: "Sashimi cá trích ép trứng (5 miếng)",
    price: 105000,
    image: MainMenu9,
  },
  {
    id: 4,
    name: "Khay sashimi tổng hợp: 3 cá hồi (60gr), 3 bạch tuộc (60gr), 3 cá trích ép trứng (30gr)",
    price: 169000,
    image: MainMenu10,
  },
  {
    id: 5,
    name: "Khay sashimi tổng hợp: 7 cá hồi (140gr), 6 bạch tuộc (120gr), 7 cá trích ép trứng (70gr)",
    price: 339000,
    image: MainMenu11,
  },
];

export const sushi: Item[] = [
  {
    id: 1,
    name: "Set tổng hợp: 2 gunkan (rong biển, cá hồi mayo), 2 maki (trứng, thanh cua), 4 nigiri (1 lươn nướng, 1 thanh cua) 2 cali roll",
    price: 115000,
    image: MainMenu12,
  },
];

export const californiaRoll: Item[] = [
  { id: 1, name: "Roll bơ phủ xốt mayo cay", price: 50000, image: MainMenu13 },
  {
    id: 2,
    name: "Roll bơ phủ cá hồi xốt mayo cay",
    price: 69000,
    image: MainMenu14,
  },
];

export const maki: Item[] = [
  {
    id: 1,
    name: "Maki tổng hợp (trứng, thanh cua, rong biển)",
    price: 30000,
    image: MainMenu15,
  },
];

export const nigiri: Item[] = [
  {
    id: 1,
    name: "Nigiri cá hồi",
    price: 21000,
    image: MainMenu16,
  },
  {
    id: 2,
    name: "Nigiri lươn nướng",
    price: 21000,
    image: MainMenu17,
  },
  {
    id: 3,
    name: "Nigiri bạch tuộc",
    price: 21000,
    image: MainMenu18,
  },
  {
    id: 4,
    name: "Nigiri Thanh Cua",
    price: 9000,
    image: MainMenu19,
  },
];

export const gunkan: Item[] = [
  {
    id: 1,
    name: "Gunkan cá hồi mayo",
    price: 18000,
    image: MainMenu20,
  },
  {
    id: 2,
    name: "Gunkan cá ngừ mayo",
    price: 18000,
    image: MainMenu21,
  },
  {
    id: 3,
    name: "Gunkan thanh cua sốt mayo",
    price: 9000,
    image: MainMenu22,
  },
  {
    id: 4,
    name: "Gunkan Rong Biển",
    price: 9000,
    image: MainMenu23,
  },
];

export const combo: Item[] = [
  {
    id: 1,
    name: "Set 01: Cơm lươn Nhật, Salad rau rong nho xốt mè rang, Canh miso, trà sâm dứa",
    price: 199000,
    image: MainMenu24,
  },
  {
    id: 2,
    name: "Set 02: Cơm curry, Salad rong biển trứng cá chuồn, Canh miso, trà sâm dứa",
    price: 119000,
    image: MainMenu25,
  },
];

export const drinks: Item[] = [
  {
    id: 1,
    name: "Trà sâm dứa",
    price: 10000,
    image: MainMenu26,
  },
  {
    id: 2,
    name: "Nước lọc ",
    price: 10000,
    image: MainMenu27,
  },
];

export const dessert: Item[] = [
  {
    id: 1,
    name: "Panna Cotta",
    price: 15000,
    image: MainMenu28,
  },
];
