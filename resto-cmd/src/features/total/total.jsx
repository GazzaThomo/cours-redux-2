import { useSelector } from "react-redux";
import { getTotalOrder, getProductList } from "../../app/selectors";

export const Total = () => {
  const list = useSelector(getProductList);

  const totalCommand = useSelector(getTotalOrder);

  return (
    <div className="TotalCommand">
      {list.length === 0 ? (
        <div>"Aucun produtit sélectioné"</div>
      ) : (
        <div>Total commande {totalCommand.toFixed(2)}€</div>
      )}
    </div>
  );
};
