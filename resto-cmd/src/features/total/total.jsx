import { useStore } from "react-redux";
import { useEffect, useState } from "react";

export const Total = () => {
  const store = useStore();
  const [list, setList] = useState(store.getState().list);

  const totalCommand = list.reduce((prv, cur) => cur.price + prv, 0);
  useEffect(() => {
    store.subscribe(() => {
      setList(store.getState().list);
    });
  });
  return (
    <div className="TotalCommand">
      {list.length === 0 ? (
        <div>"Aucun produtit sélectioné"</div>
      ) : (
        <div>{totalCommand}</div>
      )}
    </div>
  );
};
