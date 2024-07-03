import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ProductCard } from "../../common/components/ProductCard.jsx";
import * as ProductList from "../../common/models.js";
import { getUnavailableProducts } from "../../app/selectors.js";
import { getUnavailableThunk } from "./menuSlice.js";
import { addProductThunk } from "../cart/cartSlice.js";

export const Menu = () => {
  const dispatch = useDispatch();
  const unavailableProducts = useSelector(getUnavailableProducts);

  useEffect(() => {
    dispatch(getUnavailableThunk());
  }, []);

  return (
    <div className="Menu">
      {Object.values(ProductList).map((product) => (
        <ProductCard
          unavailable={unavailableProducts?.includes(product.title)}
          key={product.name}
          product={product}
          onSelect={() => dispatch(addProductThunk(product))}
        />
      ))}
    </div>
  );
};
