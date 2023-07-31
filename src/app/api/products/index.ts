// Notice from where NextResponse is imported:
import { Product } from "@/types/products";
import { NextApiRequest, NextApiResponse } from "next";

const products: Product[] = [
  {
    id: 1,
    name: "Out of",
    price: 775,
    brand: "Off-White",
    image: "images/product1/thumbnail.png",
  },
  {
    id: 2,
    name: "Product 2",
    price: 200,
    brand: "Nike",
    image: "images/product2/thumbnail.png",
  },
  {
    id: 3,
    name: "Product 3",
    price: 160,
    brand: "Nike",
    image: "images/product3/thumbnail.png",
  },
  {
    id: 4,
    name: "Product 4",
    price: 98.99,
    brand: "Adidas",
    image: "images/product4/thumbnail.png",
  },
];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Product[]>
) {
  res.status(200).json(products);
}
