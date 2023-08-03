import { Product } from "@/types/products";
import css from "./index.module.css";
import Image from "next/image";
import Link from "next/link";

type Props = {
  product: Product;
  routeTo: string;
};

export default function ProductDrop({ product, routeTo }: Props) {
  return (
    <Link className={css.container} href={routeTo}>
      <Image src={product.image} alt="Product Image" width={261} height={284} />

      <div className={css.brand}>{product.brand}</div>

      <div className={css.name}>{product.name}</div>

      <div className={css.price}>${product.price}</div>
    </Link>
  );
}
