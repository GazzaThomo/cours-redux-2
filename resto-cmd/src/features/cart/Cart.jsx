import { useSelector } from "react-redux";
import { getProductList, orderNumber } from "../../app/selectors";

export const Cart = () => {
  const numberOfEachProduct = useSelector(orderNumber);

  return (
    <div className="Selection">
      <h1>Vos produits sélectionnés</h1>
      {/* {list.map((item, index) => (
        <span key={index} className="SelectedProduct">
          {item.title} {item.price}
        </span>
      ))} */}
      {Object.entries(numberOfEachProduct).map(([name, count]) => (
        <span key={name} className="SelectedProduct">
          {name} x {count}
        </span>
      ))}
      <div className="montantGlobal"></div>
    </div>
  );
};
