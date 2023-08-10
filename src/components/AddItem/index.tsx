import { useContext, useEffect, useState } from "react";
import css from "./index.module.css";
import Image from "next/image";
import Icon from "../Icons/icons";
import IconLeftChevron from "../Icons/leftChevron";
import IconRightChevron from "../Icons/rightChevron";
import IconDarkDot from "../Icons/darkDot";
import IconGrayDot from "../Icons/grayDot";
import { ProductContext } from "@/contexts/products";
import { Product } from "@/types/products";
import IconPlus from "../Icons/plus";
import IconMinus from "../Icons/minus";
import { CartContext } from "@/contexts/cart";
import Button from "../Button";

type Props = {
  id: number;
};

const defaultProduct = {
  id: 0,
  name: `name`,
  price: 100,
  brand: "brand",
  image: "/images/product1/thumbnail.png",
};

export default function AddItem({ id }: Props) {
  const [items, setItems] = useState<number>(0);
  const [product, setProduct] = useState<Product>(defaultProduct);
  const { addItem } = useContext(CartContext);
  const { products, isLoading, error } = useContext(ProductContext);

  const incItems = () => {
    setItems((prevItems) => prevItems + 1);
  };

  const decItems = () => {
    if (items !== 0) {
      setItems((prevItems) => prevItems - 1);
    }
  };

  useEffect(() => {
    const currProduct = products.find((curr) => curr.id === id);
    if (currProduct) {
      setProduct(currProduct);
    }
  }, [id, products]);

  if (isLoading) {
    <div className={css.container}>...loading</div>;
  }

  return (
    <div className={css.container}>
      <div className={css.topContainer}>
        <div>{product.brand}</div>
        <div>{product.name}</div>
        <div>${product.price}</div>
      </div>

      <div className={css.bottomContainer}>
        <h3>Quantity</h3>
        <div className={css.addItemContainer}>
          <div
            className={items === 0 ? css.disable : ""}
            onClick={() => decItems()}
          >
            <IconMinus />
          </div>

          {items}

          <div onClick={() => incItems()}>
            <IconPlus />
          </div>
        </div>

        <Button text="Add to Cart" onClick={() => addItem(id, items)} />
      </div>
    </div>
  );
}
