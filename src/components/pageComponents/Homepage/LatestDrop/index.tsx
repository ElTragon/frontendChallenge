import { ProductContext } from "@/contexts/products";
import css from "./index.module.css";
import React, { useContext, useEffect, useReducer } from "react";
import ProductDrop from "@/components/ProductDrop";

export default function LatestDrop() {
  const { products, isLoading, error } = useContext(ProductContext);

  useEffect(() => {
    console.log(products);
  }, [products]);
  if (error !== "") {
    return (
      <div className={css.container}>
        <h2 className={css.header}>{error}</h2>
      </div>
    );
  }

  return (
    <div className={css.container}>
      <h2 className={css.header}>Explore our latest drops</h2>

      <div className={css.productsContainer}>
        {isLoading && <p>loading...</p>}
        {products.map((product) => {
          return (
            <ProductDrop
              key={product.id}
              product={product}
              routeTo={`/product/${product.id}`}
            />
          );
        })}
      </div>
    </div>
  );
}
