import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import { Button } from "../Button/Button";
import { useCount } from "../../Hooks/useCount";
import { Link } from "react-router-dom";

export const ItemDetail = ({ description, price, stock, name, img, id }) => {
  const { addProductCart } = useContext(CartContext);
  const { increment, decrement, count } = useCount(1, stock);

  // const onAdd = (items) => {
  //   alert(`se agregaron ${items} al carrito`);
  // };
  return (
    <div className="border-radius container justify-content-center mt-5">
      <div className="card ">
        <div className="card-body ">
          <h5 className="card-title">{name}</h5>
          <img src={img} alt="" />
          <p className="card-text"> {description} </p>
          <p>Precio: ${price} </p>
          <div className="d-flex p-2">
            <Button
              variant="btn btn-outline-secondary"
              text="+"
              functionClick={increment}
            ></Button>
            {count}
            <Button
              variant="btn btn-outline-secondary"
              text="-"
              functionClick={decrement}
            ></Button>
          </div>

          <Link to={"/Item/Cart"}>
            <button
              className="btn btn-outline-success"
              onClick={() => addProductCart({ id, name, price, img }, count)}
            >
              Agregar al Carrito
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
