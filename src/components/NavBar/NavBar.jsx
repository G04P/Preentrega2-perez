import { CartWidget } from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <nav className="d-flex justify-content-around p-4 sticky-top">
      <div>
        <Link to={"/"}>
          <button className="btn btn-outline-light mx-2">Inicio</button>
        </Link>
        <Link to={"/category/Nike"}>
          <button className="btn btn-sm btn-outline-light mx-2">Nike</button>
        </Link>
        <Link to={"/category/Adidas"}>
          <button className="btn btn-sm btn-outline-light mx-2">Adidas</button>
        </Link>
        <Link to={"/category/Puma"}>
          <button className="btn btn-sm btn-outline-light mx-2">Puma</button>
        </Link>
      </div>
      <div className="d-flex mx2">
        <CartWidget className="" />
        <Link to={""}>
          <button className="btn btn-outline-light mx-2">Carrito</button>
        </Link>
      </div>
    </nav>
  );
};
