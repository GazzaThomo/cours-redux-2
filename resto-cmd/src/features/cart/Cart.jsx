import { useStore, useSelector } from "react-redux";
import { SuperCremeux } from "../../common/models";
import { useState, useEffect } from "react";
import { getProductList } from "../../app/selectors";

export const Cart = () => {
  const store = useStore();
  const list = useSelector(getProductList);

  return (
    <div className="Selection">
      <h1>Vos produits sélectionnés</h1>
      {list.map((item, index) => (
        <span key={index} className="SelectedProduct">
          {item.title} {item.price}
        </span>
      ))}

      <div className="CartNav">
        <button
          onClick={() =>
            store.dispatch({ type: "ADD_PRODUCT", payload: SuperCremeux })
          }
        >
          Ajouter un super Crémeux
        </button>
      </div>
      <div className="montantGlobal"></div>
    </div>
  );
};
