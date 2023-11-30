import { ItemDetail } from "../ItemDetail/ItemDetail";
import { useContext, useEffect, useState } from "react";
import { FirebaseContext } from "../../Context/FirebaseContext";

export const ItemDetailContainer = () => {
  // const [product, setProduct] = useState(null);
  // const { id } = useParams();
  const { getProductById, product, getProductsDB } =
    useContext(FirebaseContext);
  useEffect(() => {
    getProductsDB();
    getProductById();
  }, [product]);
  return <div>{product && <ItemDetail {...product} />}</div>;
};
