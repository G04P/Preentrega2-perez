import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import styles from "./NavBar.module.css";
export const NavBar = () => {
  return (
    <nav className=" nav navbar d-flex justify-content-around p-4 sticky-top">
      <Link to={"/"}>
        <button className="btn btn-outline-light mx-2">Inicio</button>
      </Link>
      <div>
        <Link to={"/category/Remeras"}>
          <button className="btn btn-sm btn-outline-light mx-2">
            Camisetas
          </button>
        </Link>
        <Link to={"/category/Mochilas"}>
          <button className="btn btn-sm btn-outline-light mx-2">
            Mochilas
          </button>
        </Link>
        <Link to={"/category/Pelotas"}>
          <button className="btn btn-sm btn-outline-light mx-2">Pelotas</button>
        </Link>
      </div>
      <div className="dropdown">
        <button
          className="btn btn-outline-light dropdown-toggle dropdown"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Zapatillas
        </button>
        <ul className="dropdown-menu">
          <li>
            <Link to={"/category/Nike"} className="dropdown-item">
              Nike
            </Link>
          </li>
          <li>
            <Link to={"/category/Adidas"} className="dropdown-item">
              Adidas
            </Link>
          </li>
          <li>
            <Link to={"/category/Puma"} className="dropdown-item">
              Pumas
            </Link>
          </li>
        </ul>
      </div>

      <div className="d-flex mx2">
        <Link to={"/Item/Cart"}>
          <button className="btn btn-outline-light mx-2">
            <FaShoppingCart className="" />
          </button>
        </Link>
      </div>
    </nav>
  );
};
