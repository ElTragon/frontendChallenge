"use client";

import { useState } from "react";
import css from "./index.module.css";
import Icon from "../Icons/icons";
import Link from "next/link";

export default function ViewCart() {
  const [items, setItems] = useState<number>(2);
  return (
    <Link className={css.container} href="/cart">
      <div className={css.content}>
        <Icon name={"cart"} />
        <div className={css.text}>View Cart</div>
        {items != 0 && <div>{items}</div>}
      </div>
    </Link>
  );
}
