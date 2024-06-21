import { ProductCard } from "../../common/components/ProductCard.jsx";
import * as ProductList from "../../common/models.js";
import { useDispatch } from "react-redux";

export const Menu = () => {
  const dispatch = useDispatch();
  return (
    <div className="Menu">
      {Object.values(ProductList).map((product) => (
        <ProductCard
          key={product.name}
          product={product}
          onSelect={() => {
            dispatch({ type: "ADD_PRODUCT", payload: product });
          }}
        />
      ))}
    </div>
  );
};
