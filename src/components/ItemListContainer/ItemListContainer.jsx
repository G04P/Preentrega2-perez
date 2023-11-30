import { useContext, useEffect, useState } from "react";

import { ItemList } from "../ItemList/ItemList";
import { seedProductsDb } from "../../utils/seedProductsDb";

// import { CartContext } from "../../Context/CartContex";
import { FirebaseContext } from "../../Context/FirebaseContext";

export const ItemListContainer = () => {
  // const {} = useContext(CartContext);
  const { getProductsDB, isLoading, products, changes } =
    useContext(FirebaseContext);

  useEffect(() => {
    getProductsDB();
  }, [changes]);

  return (
    <>
      {isLoading ? (
        <h2>Cargando Productos...</h2>
      ) : (
        <ItemList products={products} />
      )}
    </>
  );
};
