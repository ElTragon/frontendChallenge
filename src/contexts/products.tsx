"use client";

import { Product } from "@/types/products";
import { createContext, useEffect, useState } from "react";

type Props = {
  children: JSX.Element;
};

type ProductContextType = {
  products: Product[];
  error: string;
  isLoading: boolean;
};

export const ProductContext = createContext<ProductContextType>({
  products: [],
  error: "",
  isLoading: false,
});

// in the real world this would be in a .env file
const baseUrl = "http://localhost:3000/api/";

// CompareProvider should only be used for pages that contain diffs
export function ProductProvider({ children }: Props): JSX.Element {
  const [products, setProducts] = useState<Product[]>([] as Product[]);
  const [error, setError] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    fetch("/api/products")
      .then((response) => response.json())
      .then((data: Product[]) => setProducts(data))
      .catch((error) => {
        setError("Error fetching products");
        console.log(error);
      });
    setIsLoading(false);
  }, []);

  return (
    <ProductContext.Provider
      value={{
        products,
        error,
        isLoading,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}
