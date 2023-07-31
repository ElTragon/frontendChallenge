import { ProductProvider } from "@/contexts/products";
import Image from "next/image";
import SeasonSale from "./SeasonSale";
export default function HomePage() {
  return (
    <ProductProvider>
      <SeasonSale season="summer" deal={25} />
    </ProductProvider>
  );
}
