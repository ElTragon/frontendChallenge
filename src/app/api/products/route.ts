// Notice from where NextResponse is imported:
import { Product } from "@/types/products";
import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";

const products: Product[] = [
  {
    id: 1,
    name: `Out Of Office "Ooo" sneakers`,
    price: 775,
    brand: "Off-White",
    image: "/images/product1/thumbnail.png",
  },
  {
    id: 2,
    name: "Nike Gamma Force",
    price: 200,
    brand: "Nike",
    image: "/images/product2/thumbnail.png",
  },
  {
    id: 3,
    name: "Cosmic Unity 3",
    price: 160,
    brand: "Nike",
    image: "/images/product3/thumbnail.png",
  },
  {
    id: 4,
    name: "DAILY 3.0 SHOES",
    price: 98.99,
    brand: "Adidas",
    image: "/images/product4/thumbnail.png",
  },
];

export async function GET() {
  return NextResponse.json(products);
}
