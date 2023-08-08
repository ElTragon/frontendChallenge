"use client";

import { ProductDetails } from "@/types/products";

type Props = {
  productDetails?: ProductDetails;
  error?: string;
};

export default function ShopItemPage({ productDetails, error }: Props) {
  if (!productDetails && !error) {
    return <h3>loading</h3>;
  }

  if (error) {
    return <h3>{error}</h3>;
  }

  return (
    <div>
      <h2>This is the Product Page, nothing is here for now</h2>
      <h3>{productDetails?.description}</h3>
    </div>
  );
}
