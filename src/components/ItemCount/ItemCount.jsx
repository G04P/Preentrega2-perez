import { useState } from "react";
import { Button } from "../Button/Button";

export const ItemCount = ({ stock, initial = 1, onAdd }) => {
  const [count, setCount] = useState(initial);

  const increment = () => {
    if (count < stock) {
      return setCount(count + 1);
    }
    setCount(count);
  };

  const decrement = () => {
    if (count === 0) {
      return setCount(0);
    }
    setCount(count - 1);
  };

  return (
    <div className=" border border-3  rounded-3 p-4">
      <div>
        <Button
          text="+"
          variant="btn-secondary"
          functionClick={increment}
        ></Button>
        <strong>{count}</strong>
        <Button
          text="-"
          variant="btn-secondary"
          functionClick={decrement}
        ></Button>
      </div>
      <button className="btn btn-success mt-2" onClick={() => onAdd(count)}>
        Agregar al carrito
      </button>
    </div>
  );
};
