import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import styles from "./NavBar.module.css";
import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import { Button } from "../Button/Button";
import { FirebaseContext } from "../../Context/FirebaseContext";
export const NavBar = () => {
  const { totalItems } = useContext(CartContext);
  const { getProductsDB } = useContext(FirebaseContext);
  return (
    <nav className=" nav navbar d-flex justify-content-around p-4 sticky-top">
      <Link to={"/"} className="navbar-brand " onClick={() => getProductsDB()}>
        <h3 className="link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover ">
          Gonape
        </h3>
      </Link>
      <div>
        <Button
          text="Camisetas"
          variant="btn btn-sm btn-outline-light mx-2"
          functionClick={() => getProductsDB("Remeras")}
        />
        <Button
          text="Mochilas"
          variant="btn btn-sm btn-outline-light mx-2"
          functionClick={() => getProductsDB("Mochilas")}
        />
        <Button
          text="Pelotas"
          variant="btn btn-sm btn-outline-light mx-2"
          functionClick={() => getProductsDB("Pelotas")}
        />
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
            <Button
              text="Nike"
              variant="dropdown-item"
              functionClick={() => getProductsDB("Nike")}
            >
              Nike
            </Button>
          </li>
          <li>
            <Button
              text="Adidas"
              variant="dropdown-item"
              functionClick={() => getProductsDB("Adidas")}
            >
              Nike
            </Button>
          </li>
          <li>
            <Button
              text="Puma"
              variant="dropdown-item"
              functionClick={() => getProductsDB("Puma")}
            >
              Nike
            </Button>
          </li>
        </ul>
      </div>

      <div className="d-flex mx2">
        <Link to={"/Item/Cart"}>
          <button className="btn btn-outline-light mx-2 position-relative">
            <FaShoppingCart />
            <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
              {totalItems}
            </span>
          </button>
        </Link>
      </div>
    </nav>
  );
};
