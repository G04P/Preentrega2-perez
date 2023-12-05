import { useContext, useState } from "react";
import { CartContext } from "../../Context/CartContext";

export const BuyModal = () => {
  const { cart, clearCart } = useContext(CartContext);
  const [isModalOpen, setModalOpen] = useState(false);

  const handleCheckout = () => {
    setModalOpen(true);
  };

  const handleClose = () => {
    setModalOpen(false);
  };

  const handleClearCart = () => {
    setModalOpen(false);
    clearCart();
  };

  return (
    <>
      <button
        type="button"
        className="btn btn-primary"
        disabled={Boolean(cart.length === 0)}
        onClick={handleCheckout}
      >
        Checkout
      </button>

      <div
        className={`modal fade ${isModalOpen ? "show" : ""}`}
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden={!isModalOpen}
        style={{ display: isModalOpen ? "block" : "none" }}
      >
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Tu compra
              </h1>
              <button
                type="button"
                className="btn-close"
                onClick={handleClose}
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              {cart.map((item) => (
                <div key={item.id} className="card rounded-3 mb-3">
                  <div className="row g-0">
                    <div className="col-md-3">
                      <img
                        src={item.img}
                        className="img-fluid rounded-3"
                        alt="Cotton T-shirt"
                      />
                    </div>
                    <div className="col-md-9">
                      <div className="card-body">
                        <h5 className="card-title mb-2">Nombre: {item.name}</h5>
                        <p className="card-text mb-1">{item.description}</p>
                        <div className="d-flex justify-content-between align-items-center">
                          <div>
                            <p className="mb-0">Precio: ${item.price}</p>
                            <p className="mb-0">Cantidad: {item.quantity}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-danger"
                onClick={handleClose}
              >
                Cerrar
              </button>
              <button
                type="button"
                className="btn btn-success"
                onClick={handleClearCart}
              >
                Finalizar Compra
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
