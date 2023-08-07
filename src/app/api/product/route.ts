import { ProductDetails } from "@/types/products";
import { NextApiRequest, NextApiResponse } from "next";

const products: ProductDetails[] = [
  {
    id: 1,
    description:
      "Comfort meets fashion, and everyday becomes a retreat from the ordinary",
    bulletPoints: [
      "Regular fit",
      "Lace Closure",
      "Rubber outsole with vulcanized look",
      "Imported",
    ],
    images: [
      "images/product1/image1.png",
      "images/product1/image2.png",
      "images/product1/image3.png",
    ],
    relatedImage: "relatedShoe.png",
  },
  {
    id: 2,
    description:
      "Indulge in the allure of enduring style with the Nike Classic White Shoe. Crafted to perfection, this iconic footwear piece boasts a classic design that stands the test of time",
    bulletPoints: [
      "Regular fit",
      "Lace Closure",
      "Rubber outsole with vulcanized look",
      "Imported",
    ],
    images: [
      "images/product2/image1.png",
      "images/product2/image2.png",
      "images/product2/image3.png",
    ],
    relatedImage: "relatedShoe.png",
  },
  {
    id: 3,
    description:
      "Elevate your streetwear game and take your style to the stratosphere",
    bulletPoints: [
      "Regular fit",
      "Lace Closure",
      "Rubber outsole with vulcanized look",
      "Imported",
    ],
    images: [
      "images/product3/image1.png",
      "images/product3/image2.png",
      "images/product3/image3.png",
    ],
    relatedImage: "relatedShoe.png",
  },
  {
    id: 4,
    description:
      "Energize your look with a fresh take on heritage adidas style. The adidas Daily 3.0 Shoes cut a classic profile with a modern suede upper. Your walk across campus or commute across town has never looked or felt this good.",
    bulletPoints: [
      "Regular fit",
      "Lace Closure",
      "Rubber outsole with vulcanized look",
      "Imported",
    ],
    images: [
      "images/product4/image1.png",
      "images/product4/image2.png",
      "images/product4/image3.png",
    ],
    relatedImage: "relatedShoe.png",
  },
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
