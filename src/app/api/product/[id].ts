import { ProductDetails } from "@/types/products";
import { NextApiRequest, NextApiResponse } from "next";

const products: ProductDetails[] = [
  {
    id: 1,
    description:
      "Energize your look with a fresh take on heritage adidas style. The adidas Daily 3.0 Shoes cut a classic profile with a modern suede upper. Your walk across campus or commute across town has never looked or felt this good.",
    bulletPoints: [
      "Regular fit",
      "Lace Closure",
      "Rubber outsole with vulcanized look",
      "Imported",
    ],
    images: [],
  },
  { id: 2, description: "", bulletPoints: [], images: [] },
  { id: 3, description: "", bulletPoints: [], images: [] },
  { id: 4, description: "", bulletPoints: [], images: [] },
];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ProductDetails | { message: string }>
) {
  const { id } = req.query;

  const productId = parseInt(id as string, 10);
  const product = products.find((p) => p.id === productId);

  if (product) {
    res.status(200).json(product);
  } else {
    res.status(404).json({ message: "Product not found" });
  }
}
