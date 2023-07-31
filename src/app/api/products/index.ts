// Notice from where NextResponse is imported:
import { Product } from "@/types/products";
import { NextApiRequest, NextApiResponse } from "next";

const products: Product[] = [
  {
    id: 1,
    name: "Out of",
    price: 775,
    brand: "Off-White",
    image: "product1.jpg",
  },
  {
    id: 2,
    name: "Product 2",
    price: 200,
    brand: "Nike",
    image: "product2.jpg",
  },
  {
    id: 3,
    name: "Product 3",
    price: 160,
    brand: "Nike",
    image: "product3.jpg",
  },
  {
    id: 4,
    name: "Product 4",
    price: 98.99,
    brand: "Adidas",
    image: "product4.jpg",
  },
];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Product[]>
) {
  res.status(200).json(products);
}
