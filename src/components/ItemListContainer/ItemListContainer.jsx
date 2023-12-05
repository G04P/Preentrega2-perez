import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ItemList } from "../ItemList/ItemList";
import { FirebaseContext } from "../../Context/FirebaseContext";
import { seedProductsDb } from "../../productMock";

// eslint-disable-next-line react/prop-types
export const ItemListContainer = ({ greeting }) => {
  const { category } = useParams();
  const { getProductsDB, products, isLoading, changes } =
    useContext(FirebaseContext);
  // const [filter, setFilter] = useState(null);

  useEffect(() => {
    // setFilter(category);
    getProductsDB();
  }, [category, changes]);
  return (
    <>
      <div>{greeting}</div>
      {isLoading ? (
        <h2>Cargando Productos...</h2>
      ) : (
        <ItemList products={products} />
      )}
    </>
  );
};
