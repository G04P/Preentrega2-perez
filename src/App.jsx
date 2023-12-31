import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ItemDetailContainer, ItemListContainer, NavBar } from "./components";
import { Cart } from "./components/Cart/Cart";
import { FirebaseContextProvider } from "./Context/FirebaseContext";
import { CartContextProvider } from "./Context/CartContext";

export const App = () => {
  return (
    <FirebaseContextProvider>
      <BrowserRouter>
        <CartContextProvider>
          <NavBar />

          <Routes>
            <Route
              path="/"
              element={
                <ItemListContainer greeting={"Bienvenidos a mi Tienda"} />
              }
            />
            <Route path="/category/:category" element={<ItemListContainer />} />
            <Route path="/Item/:id" element={<ItemDetailContainer />} />
            <Route path="/Item/Cart" element={<Cart />} />
          </Routes>
        </CartContextProvider>
      </BrowserRouter>
    </FirebaseContextProvider>
  );
};
