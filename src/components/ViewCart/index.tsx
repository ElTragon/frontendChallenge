"use client";

import { useState } from "react";
import css from "./index.module.css";
import Icon from "../Icons/icons";
import Link from "next/link";

export default function ViewCart() {
  const [items, setItems] = useState<number>(2);
  return (
    <div className={css.container}>
      <div className={css.content}>
        <Icon name={"cart"} />
        <div className={css.text}>View Cart</div>
        {items != 0 && <div className={css.items}>{items}</div>}
      </div>
    </div>
  );
}
