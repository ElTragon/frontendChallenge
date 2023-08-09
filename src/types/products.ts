export type Product = {
  id: number;
  name: string;
  brand: string;
  price: number;
  image: string;
};

export type ProductDetails = {
  id: number;
  description: string;
  bulletPoints: string[];
  images: string[];
  relatedImage: string;
};
