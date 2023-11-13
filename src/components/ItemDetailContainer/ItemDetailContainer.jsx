import { useParams } from "react-router-dom";
import { getProduct } from "../../productMock";
import { ItemDetail } from "../ItemDetail/ItemDetail";
import { useEffect, useState } from "react";

export const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    getProduct(id)
      .then((resp) => setProduct(resp))
      .catch((err) => console.log(err));
  }, [product]);
  return <div>{product && <ItemDetail {...product} />}</div>;
};