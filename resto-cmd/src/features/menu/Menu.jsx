import { ProductCard } from "../../common/components/ProductCard.jsx";
import * as ProductList from "../../common/models.js";
import { useDispatch } from "react-redux";
import { cartSlice } from "../cart/cartSlice.js";

export const Menu = () => {
  const dispatch = useDispatch();
  return (
    <div className="Menu">
      {Object.values(ProductList).map((product) => (
        <ProductCard
          key={product.name}
          product={product}
          onSelect={() => {
            dispatch(cartSlice.actions.addProduct(product));
          }}
        />
      ))}
    </div>
  );
};
