import { ItemDetail } from "../ItemDetail/ItemDetail";
import { useContext, useEffect, useState } from "react";
import { FirebaseContext } from "../../Context/FirebaseContext";
import { useParams } from "react-router-dom";

export const ItemDetailContainer = () => {
  // const [product, setProduct] = useState(null);
  const { id } = useParams();
  const { getProductById, product } = useContext(FirebaseContext);
  useEffect(() => {
    getProductById(id);
  }, [id]);
  return <div>{product && <ItemDetail {...product} />}</div>;
};
