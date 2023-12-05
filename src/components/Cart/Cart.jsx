import { IoClose } from "react-icons/io5";

import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import { BuyModal } from "../BuyModal/BuyModal";

export const Cart = () => {
  const { cart, total, removeProduct } = useContext(CartContext);

  return (
    <section className="h-100">
      <div className="container h-100 py-5">
        <div className="row d-flex justify-content-ce nter align-items-center h-100">
          <div className="col-10">
            <div className="d-flex justify-content-between align-items-center mb-4">
              <h3 className="fw-normal mb-0 text-black">Shopping Cart</h3>
            </div>
            {cart.map((item) => (
              <div key={item.id} className="card rounded-3 mb-4">
                <div className="card-body p-4">
                  <div className="row d-flex justify-content-between align-items-center">
                    <div className="col-md-2 col-lg-2 col-xl-2">
                      <img
                        src={item.img}
                        className="img-fluid rounded-3"
                        alt="Cotton T-shirt"
                      />
                    </div>
                    <div className="col-md-3 col-lg-3 col-xl-3">
                      <p className="lead fw-normal mb-2">Nombre:{item.name}</p>
                      <p>
                        <span className="text-muted">{item.description}</span>
                      </p>
                    </div>

                    <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                      <h5 className="mb-0">${item.price}</h5>
                    </div>
                    <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                      <h5 className="mb-0">{item.quantity}</h5>
                    </div>

                    <div className="col-md-1 col-lg-1 col-xl-1 text-end">
                      <button
                        className="btn btn-danger"
                        onClick={() => removeProduct(item.id)}
                      >
                        <IoClose />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            <h3>Total de la Compra: ${total}</h3>
            <div className="card">
              <div className="card-body d-grid gap-2">
                <BuyModal></BuyModal>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
