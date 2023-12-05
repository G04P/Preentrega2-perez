import { createContext, useEffect, useState } from "react";

// se crea el context
export const CartContext = createContext();

// aca creamos el proveedor
export const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  const addProductCart = (product, quantity) => {
    const index = cart.findIndex((item) => item.id === product.id);
    if (index == -1) {
      const newProduct = {
        ...product,
        quantity,
        subTotal: +product.price * quantity,
      };
      setCart([...cart, newProduct]);
    } else {
      const cartCopy = [...cart];
      cartCopy[index].quantity += quantity;
      cartCopy[index].subTotal =
        cartCopy[index].price * cartCopy[index].quantity;

      setCart(cartCopy);
    }
  };

  const removeProduct = (id) => {
    const productsFilter = cart.filter((product) => product.id !== id);
    setCart(productsFilter);
  };

  const handleTotal = () => {
    const totalItems = cart.reduce(
      (acumulador, item) => acumulador + item.subTotal,
      0
    );
    setTotal(totalItems);
  };

  const totalItems = cart.length;

  const clearCart = () => setCart([]);

  useEffect(() => {
    handleTotal();
    console.log(cart);
  }, [cart]);

  const objectValue = {
    cart,
    total,
    totalItems,
    removeProduct,
    handleTotal,
    clearCart,
    addProductCart,
  };
  return (
    <CartContext.Provider value={objectValue}>{children}</CartContext.Provider>
  );
};
